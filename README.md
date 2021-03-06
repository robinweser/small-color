# small-color

A tiny (0.8kb), limited & tree-shakable alternative to [color](https://github.com/Qix-/color).<br>
It is very limited and optimized for runtime usage in the browser.<br>
It only supports a subset of color and does **not** have input validation.

It has zero dependencies and supports tree-shaking making its size even smaller depending on the functions used.

## Installation

```sh
yarn add small-color
```

## Limitations

1. It only supports valid CSS color string to be passed in
2. It currently only supports rgb(a) and hsl(a) color values
3. It does not optimize output values (e.g. round decimals to X digits)
4. It does not validate input values
5. It always returns `hsla` or `rgba` (even if alpha=1)

## Usage

In order to use any manipulation function, we need to parse our color string.<br />
Now we can manipulate it until we finally generate a string again.

```javascript
import { parse, toRgb, desaturate, lighten, fade } from 'small-color'

const color = parse('rgb(255, 0, 100)')

const lightened = lighten(color, 0.5)
const saturated = desaturate(lightened, 0.3)
const faded = fade(saturated, 0.5)

const output = toRgb(faded)

console.log(output) // => rgba(236,147,182,0.5)
```

## API

- parse(string): color
- lighten(color, float): color
- darken(color, float): color
- saturate(color, float): color
- desaturate(color, float): color
- fade(color, float): color
- opaquer(color, float): color
- grayscale(color): color
- toRgb(color): string
- toHsl(color): string

## License

small-color is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@robinweser](http://weser.io) and all the great contributors.
