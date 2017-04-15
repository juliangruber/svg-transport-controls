const component = require('microcomponent')
const html = require('bel')
const noop = () => {}

module.exports = () => {
  const radius = 3
  const c = component({ pure: true })
  c.on('render', function () {
    const {
      width,
      height,
      playing,
      recording,
      x: x = 0,
      y: y = 0,
      onstart: onstart = noop,
      onprevbar: onprevbar = noop,
      onnextbar: onnextbar = noop,
      onrecord: onrecord = noop,
      onstop: onstop = noop,
      onplay: onplay = noop
    } = this.props
    const cellWidth = width / 5
    const line = idx => html`
      <line
        x1=${cellWidth * (idx + 1)}
        y1=0
        x2=${cellWidth * (idx + 1)}
        y2=${height}
        stroke="hsl(0, 0%, 45%)"
        stroke-width=0.5
      />
    `
    const clickable = () => html`
      <rect width=${cellWidth} height=${height} fill="transparent" />
    `
    const id = Math.random().toString(16).slice(2)
    return html`
      <g transform="translate(${x}, ${y})">
        <defs>
          <clipPath id="clip-${id}">
            <rect
              width=${width}
              height=${height}
              rx=${radius}
              ry=${radius}
            />
          </clipPath>
        </defs>
        <rect
          transform="translate(0, 1)"
          width=${width}
          height=${height}
          rx=${radius}
          ry=${radius}
          fill="hsl(0, 0%, 35%)"
        />
        <rect
          width=${width}
          height=${height}
          rx=${radius}
          ry=${radius}
          fill="hsl(0, 0%, 60%)"
        />
        <g onclick=${onprevbar}>
          ${clickable()}
          <polygon
            points="
              ${cellWidth * 1 / 4},${height * 2 / 4}
              ${cellWidth * 2 / 4},${height * 1 / 4}
              ${cellWidth * 2 / 4},${height * 2 / 4}
              ${cellWidth * 3 / 4},${height * 1 / 4}
              ${cellWidth * 3 / 4},${height * 3 / 4}
              ${cellWidth * 2 / 4},${height * 2 / 4}
              ${cellWidth * 2 / 4},${height * 3 / 4}
            "
            fill="white"
          />
        </g>
        ${line(0)}
        <g transform="translate(${cellWidth}, 0)" onclick=${onnextbar}>
          ${clickable()}
          <polygon
            points="
              ${cellWidth * 1 / 4},${height * 1 / 4}
              ${cellWidth * 2 / 4},${height * 2 / 4}
              ${cellWidth * 2 / 4},${height * 1 / 4}
              ${cellWidth * 3 / 4},${height * 2 / 4}
              ${cellWidth * 2 / 4},${height * 3 / 4}
              ${cellWidth * 2 / 4},${height * 2 / 4}
              ${cellWidth * 1 / 4},${height * 3 / 4}
            "
            fill="white"
          />
        </g>
        ${line(1)}
        <g transform="translate(${cellWidth * 2}, 0)" onclick=${playing ? onstop : onstart}>
          ${clickable()}
          ${playing ? html`
                <polygon
                  points="
                    ${cellWidth * 1 / 4},${height * 1 / 4}
                    ${cellWidth * 3 / 4},${height * 1 / 4}
                    ${cellWidth * 3 / 4},${height * 3 / 4}
                    ${cellWidth * 1 / 4},${height * 3 / 4}
                  "
                  fill="white"
                />
              ` : html`
              <polygon
                points="
                  ${cellWidth * 1 / 4},${height * 1 / 4}
                  ${cellWidth * 1 / 4 + 2},${height * 1 / 4}
                  ${cellWidth * 1 / 4 + 2},${height * 2 / 4}
                  ${cellWidth * 3 / 4},${height * 1 / 4}
                  ${cellWidth * 3 / 4},${height * 3 / 4}
                  ${cellWidth * 1 / 4 + 2},${height * 2 / 4}
                  ${cellWidth * 1 / 4 + 2},${height * 3 / 4}
                  ${cellWidth * 1 / 4},${height * 3 / 4}
                "
                fill="white"
              />
            `}
        </g>
        ${line(2)}
        <g transform="translate(${cellWidth * 3}, 0)" onclick=${!playing && onplay}>
          ${clickable()}
          ${playing ? html`
                <rect
                  x=0.5
                  y=0
                  width=${cellWidth - 1}
                  height=${height}
                  fill="green"
                />
              ` : ''}
          <polygon
            points="
              ${cellWidth * 1 / 4},${height * 1 / 4}
              ${cellWidth * 3 / 4},${height * 2 / 4}
              ${cellWidth * 1 / 4},${height * 3 / 4}
            "
            fill="white"
          />
        </g>
        ${line(3)}
        <g transform="translate(${cellWidth * 4}, 0)" onclick=${!recording && onrecord}>
          ${clickable()}
          ${recording ? html`
                <rect
                  x=0.5
                  y=0
                  width=${cellWidth - 1}
                  height=${height}
                  fill="hsl(0, 97%, 40%)"
                  clip-path="url(#clip-${id})"
                />
              ` : ''}
          <circle
            cx=${cellWidth / 2}
            cy=${height / 2}
            r=${Math.min(cellWidth, height) * 1 / 4}
            fill="${recording ? 'white' : 'hsl(0, 97%, 42%)'}"
            stroke="${recording ? '' : 'hsl(0, 0%, 45%)'}"
          />
        </g>
      </g>
    `
  })
  return c
}
