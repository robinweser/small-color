export default function toHsl({ h, s, l, a }) {
  return "hsla(" + [h, s * 100 + "%", l * 100 + "%", a].join(",") + ")";
}
