import * as React from 'react'
import {SVGProps} from 'react'
import {flag} from '../src/globals'


interface Props extends SVGProps<SVGPathElement> {
  ends: number
  diameter: number
  x?: number
  y?: number
  innerDiameter?: number
}

export default ({ends = 5, diameter = 10, x = flag.width/2, y = flag.height/2, innerDiameter, ...props}: Props) => {

  const radius = diameter / 2

  // @todo find the algo to calculate default inner radius
  if (!innerDiameter) {
    innerDiameter = {
      5: radius * .37,
      6: radius * .57,
      7: radius * .7,
    }[ends] || radius / 2
  }

  const innerRadius = innerDiameter / 2

  const angle = Math.PI / ends

  let path = 'M '

  for (var i = 0; i < ends * 2; i++) {
    const r = i & 1 ? innerRadius : radius

    path += ` ${Math.round((x - r * Math.sin(i * angle)) * 10) / 10}` // X
    path += ` ${Math.round((y - r * Math.cos(i * angle)) * 10) / 10}` // Y
  }

  return <path d={path +'Z'} {...props}/>
}
