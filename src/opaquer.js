export default function fade(color, value) {
  return {
    ...color,
    a: Math.min(1, color.a + color.a * value),
  }
}
