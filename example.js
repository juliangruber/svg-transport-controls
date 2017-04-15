const controls = require('.')
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
