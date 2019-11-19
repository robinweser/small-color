import assignImmutable from './utils/assignImmutable'

export default function darken(color, value) {
  return assignImmutable(color, { l: Math.max(0, color.l - color.l * value) })
}
