import {flag} from '../src/globals'
import * as React from 'react'
import {SVGProps} from 'react'

interface Props extends SVGProps<SVGPathElement> {
  // Cross center X
  x?: number
  // Cross center Y
  y?: number
}

export default ({x = flag.width / 2, y = flag.height / 2, ...props}: Props) => {
  return <path d={`M0 ${y}H${flag.width}M${x} 0v${flag.height}`} {...props}/>
}