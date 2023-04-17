import * as React from 'react'
import {SVGProps} from 'react'

type ReuseProps = {
  id: string
  instances: SVGProps<SVGUseElement>[]
}

export default ({id = '', instances = []}: ReuseProps) => {

  return <>
    {instances.map((props, i) =>
      <use key={i} href={`#${id}`} {...props}/>,
    )}
  </>
}