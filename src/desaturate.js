import assignImmutable from './utils/assignImmutable'

export default function desaturate(color, value) {
  return assignImmutable(color, { s: Math.max(0, color.s - color.s * value) })
}
