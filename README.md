# svg-transport-controls

DAW transport controls as svg.

![screenshot](screenshot.png)

## Usage

```js
const controls = require('svg-transport-controls')
const html = require('bel')

document.body.appendChild(html`
  <svg>
    ${controls().render({
      width: 210,
      height: 35,
      playing: false
    })}
    <g transform="translate(0, 50)">
      ${controls().render({
        width: 210,
        height: 35,
        playing: true
      })}
    </g>
    <g transform="translate(0, 100)">
      ${controls().render({
        width: 210,
        height: 35,
        playing: true,
        recording: true
      })}
    </g>
  </svg>
`)
```

## License

MIT
