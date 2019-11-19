export default function fade(color, value) {
  return {
    ...color,
    a: Math.max(0, color.a - color.a * value),
  }
}
