import assignImmutable from './utils/assignImmutable'

export default function lighten(color, value) {
  return assignImmutable(color, { l: Math.min(1, color.l + color.l * value) })
}
