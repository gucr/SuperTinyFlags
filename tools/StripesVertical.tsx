import {flag} from '../src/globals'
import * as React from 'react'
import {ReactNode, SVGProps} from 'react'


interface Props extends SVGProps<SVGGElement> {
  colors: string[]
  count?: number
  /* A children SVG node that will be inserted at the end of the <g> group */
  children?: ReactNode,
  // The X starting position
  x1?: number
  // The X ending position
  x2?: number
  // The Y starting position
  y1?: number
  // The Y ending position
  y2?: number
}

export default ({colors = [], count, x1 = 0, x2 = flag.width, y1 = 0, y2 = flag.height, children}: Props) => {

  const numberOfStripes = count || colors.length
  const stripeWidth = Math.ceil((x2 - x1) / numberOfStripes * 10) / 10

  const pathsByColor: { [key: string]: string[] } = {};


  [...Array(numberOfStripes)].forEach((_, i) => {
    const x = (stripeWidth * i + stripeWidth / 2) + x1
    const color = colors[i % colors.length]

    if (color === null) {
      return
    }

    if (!pathsByColor[color]) {
      pathsByColor[color] = []
    }

    pathsByColor[color].push(`M ${x} ${y1} ${x} ${y2}`)
  })

  return <g strokeWidth={stripeWidth}>

    {Object.entries(pathsByColor).map(([color, paths]) => {
      return <path
        key={color}
        stroke={color}
        d={paths.join(' ')}
      />
    })}
    {children}
  </g>
}