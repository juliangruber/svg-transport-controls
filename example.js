const controls = require('.')
const html = require('bel')
const extend = Object.assign

const handlers = {
  onstop: () => console.log('stop'),
  onplay: () => console.log('play'),
  onrecord: () => console.log('record'),
  onstart: () => console.log('start'),
  onprevbar: () => console.log('prev bar'),
  onnextbar: () => console.log('next bar')
}

document.body.appendChild(
  html`
  <svg>
    ${controls().render(extend({ width: 120, height: 35, playing: false }, handlers))}
    ${controls().render(extend({ width: 120, height: 35, y: 50, playing: true }, handlers))}
    ${controls().render(extend({ width: 120, height: 35, y: 100, playing: true, recording: true }, handlers))}
  </svg>
`
)
