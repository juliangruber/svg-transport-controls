const component = require('microcomponent')
const html = require('bel')

module.exports = () => {
  const radius = 3
  const c = component({ pure: true })
  c.on('render', function () {
    const { width, height } = this.props
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
    return html`
      <g>
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
        <polygon
          points="
            ${cellWidth * 1/4},${height * 2/4}
            ${cellWidth * 2/4},${height * 1/4}
            ${cellWidth * 2/4},${height * 2/4}
            ${cellWidth * 3/4},${height * 1/4}
            ${cellWidth * 3/4},${height * 3/4}
            ${cellWidth * 2/4},${height * 2/4}
            ${cellWidth * 2/4},${height * 3/4}
          "
          fill="white"
        />
        ${line(0)}
        <polygon
          transform="translate(${cellWidth}, 0)"
          points="
            ${cellWidth * 1/4},${height * 1/4}
            ${cellWidth * 2/4},${height * 2/4}
            ${cellWidth * 2/4},${height * 1/4}
            ${cellWidth * 3/4},${height * 2/4}
            ${cellWidth * 2/4},${height * 3/4}
            ${cellWidth * 2/4},${height * 2/4}
            ${cellWidth * 1/4},${height * 3/4}
          "
          fill="white"
        />
        ${line(1)}
        <polygon
          transform="translate(${cellWidth * 2}, 0)"
          points="
            ${cellWidth * 1/4    },${height * 1/4}
            ${cellWidth * 1/4 + 2},${height * 1/4}
            ${cellWidth * 1/4 + 2},${height * 2/4}
            ${cellWidth * 3/4    },${height * 1/4}
            ${cellWidth * 3/4    },${height * 3/4}
            ${cellWidth * 1/4 + 2},${height * 2/4}
            ${cellWidth * 1/4 + 2},${height * 3/4}
            ${cellWidth * 1/4    },${height * 3/4}
          "
          fill="white"
        />
        ${line(2)}
        <polygon
          transform="translate(${cellWidth * 3}, 0)"
          points="
            ${cellWidth * 1/4},${height * 1/4}
            ${cellWidth * 3/4},${height * 2/4}
            ${cellWidth * 1/4},${height * 3/4}
          "
          fill="white"
        />
        ${line(3)}
        <circle
          transform="translate(${cellWidth * 4}, 0)"
          cx=${cellWidth / 2}
          cy=${height / 2}
          r=${Math.min(cellWidth, height) * 1/4}
          fill="hsl(0, 97%, 42%)"
          stroke="hsl(0, 0%, 45%)"
        />
      </g>
    `
  })
  return c
}
