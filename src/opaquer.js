import assignImmutable from './utils/assignImmutable'

export default function opaquer(color, value) {
  return assignImmutable(color, { a: Math.min(1, color.a + color.a * value) })
}
