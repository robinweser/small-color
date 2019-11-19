import hslToRgb from './utils/hslToRgb'

export default function toRgb(color) {
  const rgb = hslToRgb(color.h, color.s, color.l)

  return 'rgba(' + [rgb[0], rgb[1], rgb[2], color.a].join(',') + ')'
}
