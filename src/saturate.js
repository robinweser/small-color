export default function saturate(color, value) {
  return {
    ...color,
    s: Math.min(1, color.s + color.s * value),
  }
}
