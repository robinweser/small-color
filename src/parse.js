import rgbToHsl from './utils/rgbToHsl'

const RE = /(rgba?|hsla?)\((.*)\)/i

export default function parse(color) {
  const [input, callee, p] = color
    .trim()
    .replace(/\s*/gi, '')
    .match(RE)

  if (!input) {
    return false
  }

  const [x, y, z, a = 1] = p.split(',').map(parseFloat)

  if (callee.indexOf('rgb') !== -1) {
    return {
      callee,
      ...rgbToHsl(x, y, z),
      a,
    }
  }
  return {
    callee,
    h: x,
    s: y / 100,
    l: z / 100,
    a,
  }
}
