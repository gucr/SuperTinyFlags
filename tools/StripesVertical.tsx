import {flag} from '../src/globals'
import * as React from 'react'
import {SVGProps} from 'react'


interface Props extends SVGProps<SVGGElement> {
  colors: string[]
  count?: number
}

export default ({colors = [], count}: Props) => {

  const numberOfStripes = count || colors.length
  const stripeWidth = Math.ceil(flag.width / numberOfStripes)

  return <g strokeWidth={stripeWidth}>
    {[...Array(numberOfStripes)].map((_, i) => {

      const x = stripeWidth * i + stripeWidth / 2

      return <path
        key={i}
        stroke={colors[i % colors.length]}
        d={`M ${x} 0 ${x} ${flag.height}`}
      />
    })}
  </g>
}