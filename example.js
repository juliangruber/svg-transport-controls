const Controls = require('.')
const html = require('bel')

const controls = Controls()

document.body.appendChild(html`
  <svg>
    ${controls.render({
      width: 230,
      height: 35
    })}
  </svg>
`)
