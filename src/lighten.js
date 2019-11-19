export default function lighten(color, value) {
  return {
    ...color,
    l: Math.min(1, color.l + color.l * value),
  }
}
