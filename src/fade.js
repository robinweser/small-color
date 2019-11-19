import assignImmutable from './utils/assignImmutable'

export default function fade(color, value) {
  return assignImmutable(color, { a: Math.max(0, color.a - color.a * value) })
}
