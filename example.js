const controls = require('.')
const html = require('bel')

document.body.appendChild(html`
  <svg>
    ${controls().render({
      width: 230,
      height: 35,
      playing: false
    })}
    <g transform="translate(0, 50)">
      ${controls().render({
        width: 230,
        height: 35,
        playing: true
      })}
    </g>
  </svg>
`)
