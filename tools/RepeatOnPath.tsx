import * as React from 'react'
import {ReactNode, SVGProps} from 'react'
import {hashCode} from './helpers'

interface Props extends SVGProps<SVGMarkerElement> {
  path: string,
  children: ReactNode
  pathProps?: SVGProps<SVGPathElement>
}

export default ({path = '', pathProps = {}, ...props}:Props) => {

  const id = hashCode(path)

  return <>
    <marker id={id.toString()} markerHeight="720" markerWidth="720" {...props}/>
    <path fill="none" markerMid={`url(#${id})`} d={path} {...pathProps}/>
  </>

}