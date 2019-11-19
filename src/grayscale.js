import desaturate from './desaturate'

export default function greyscale(color) {
  return desaturate(color, 1)
}
