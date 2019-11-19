import assignImmutable from './utils/assignImmutable'

export default function saturate(color, value) {
  return assignImmutable(color, { s: Math.min(1, color.s + color.s * value) })
}
