export default function desaturate(color, value) {
  return {
    ...color,
    s: Math.max(0, color.s - color.s * value),
  }
}
