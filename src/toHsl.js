export default function toHsl(color) {
  return (
    'hsla(' +
    [color.h, color.s * 100 + '%', color.l * 100 + '%', color.a].join(',') +
    ')'
  )
}
