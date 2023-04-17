import {flag} from '../src/globals'
import * as React from 'react'
import {SVGProps} from 'react'

export default (props:SVGProps<SVGSVGElement>) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${flag.width} ${flag.height}`} {...props}/>
}