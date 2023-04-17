import {flag} from '../src/globals'
import * as React from 'react'
import {ReactNode, SVGProps} from 'react'


interface Props extends SVGProps<SVGGElement> {
  /* An array containing all the successive colors.*/
  colors: string[]
  /* If you wish to repeat the stripes for a greater amount than there is colors (eg. US flag) */
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

export default ({colors = [], count, children, x1 = 0, x2 = flag.width, y1 = 0, y2 = flag.height, ...props}: Props) => {

  const numberOfStripes = count || colors.length
  const stripeHeight = Math.ceil((y2 - y1) / numberOfStripes)

  const pathsByColor: { [key: string]: string[] } = {};

  [...Array(numberOfStripes)].forEach((_, i) => {
    const y = (stripeHeight * i + stripeHeight / 2) + y1
    const color = colors[i % colors.length]

    if (!pathsByColor[color]) {
      pathsByColor[color] = []
    }

    pathsByColor[color].push(`M ${x1} ${y} ${x2} ${y}`)
  })

  return <g strokeWidth={stripeHeight} {...props}>
    {Object.entries(pathsByColor).map(([color, paths]) => {
      console.log(paths)
      return <path
        key={color}
        stroke={color}
        d={paths.join(' ')}
      />
    })}
    {children}
  </g>
}