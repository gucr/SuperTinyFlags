import {flag} from '../src/globals'
import * as React from 'react'
import {SVGProps} from 'react'

export default (props:SVGProps<SVGCircleElement>) => {
  return <circle
    cx={props.cx || flag.width /2}
    cy={props.cy || flag.height /2}
    {...props}
  />
}