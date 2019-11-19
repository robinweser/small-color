import hslToRgb from './utils/hslToRgb'

export default function toRgb({ h, s, l, a }) {
  const [r, g, b] = hslToRgb(h, s, l)

  return 'rgba(' + [r, g, b, a].join(',') + ')'
}
