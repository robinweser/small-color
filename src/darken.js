export default function darken(color, value) {
  return {
    ...color,
    l: Math.max(0, color.l - color.l * value),
  }
}
