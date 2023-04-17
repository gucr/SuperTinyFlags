import {flag} from '../src/globals'
import * as React from 'react'
import {SVGProps} from 'react'

interface Props extends SVGProps<SVGPathElement> {
  x1?: number
  y1?: number
  y2?: number
  x2?: number
}

export default ({x1=0, x2= flag.width, y1=0, y2=flag.height, ...props}:Props) => {
  return <path d={`M${x1} ${y1}H${x2}V${y2}H${x1}z`} {...props}/>
}
