import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export type SmokeEffectProps = React.ComponentProps<'canvas'> & {
  color?: string
}

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.6;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t = u_time * 0.2;

  // Gentle organic lean
  float x = uv.x + 0.06 * sin(uv.y * 3.0 + t * 0.5);

  // Turbulence scrolling upward
  float a = fbm(vec2(x * 2.8, uv.y * 1.8 - t));
  float b = fbm(vec2(x * 5.2 + 3.7, uv.y * 3.2 - t * 1.4));
  float f = a * 0.7 + b * 0.35;

  // Continuous, smooth vertical falloff across the entire height
  float verticalFade = pow(clamp(1.0 - uv.y, 0.0, 1.0), 1.6);

  // Modulate fluid noise with vertical fade so plumes naturally break apart as they rise
  float smoke = f * 1.4 + 0.25;
  float e = smoke * verticalFade;

  // Silky, gradual transparency transition without harsh step or cliff
  float alpha = 0.35 * smoothstep(0.04, 0.45, e) + 0.65 * smoothstep(0.45, 0.95, e);
  alpha *= smoothstep(1.0, 0.88, uv.y); // Clean zero at the top edge

  // Rich primary blue with subtle luminous highlights only in dense crests
  vec3 highlight = mix(u_color, vec3(0.7, 0.88, 1.0), 0.35);
  vec3 color = mix(u_color, highlight, smoothstep(0.7, 1.0, e));

  gl_FragColor = vec4(color * alpha, alpha);
}
`

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '').trim()
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
  }
  const n = parseInt(h, 16)
  if (h.length !== 6 || Number.isNaN(n)) return [0.1, 0.45, 0.95]
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export const SmokeEffect = ({
  color = '#1A73F2',
  className,
  style,
  ...props
}: SmokeEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: false, alpha: true })
    if (!gl) {
      console.warn('WebGL not supported for SmokeEffect')
      return
    }

    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT)
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG)
    const program = gl.createProgram()
    if (!vert || !frag || !program) return

    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )
    const aPos = gl.getAttribLocation(program, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uColor = gl.getUniformLocation(program, 'u_color')

    gl.uniform3f(uColor, ...hexToRgb(color))

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.round((rect.width || 400) * dpr))
      const h = Math.max(1, Math.round((rect.height || 280) * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
    }

    updateSize()

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    let raf = 0

    const render = () => {
      if (canvas.width <= 1 || canvas.height <= 1) {
        updateSize()
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, 18 + (reduce ? 0 : (performance.now() - start) / 1000))
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(render)
    }

    // Start continuous animation loop immediately without any observer interference
    raf = requestAnimationFrame(render)

    const ro = new ResizeObserver(() => {
      updateSize()
    })
    ro.observe(canvas)
    window.addEventListener('resize', updateSize)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', updateSize)
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(buffer)
    }
  }, [color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('pointer-events-none block h-full w-full', className)}
      style={style}
      {...props}
    />
  )
}

export default SmokeEffect
