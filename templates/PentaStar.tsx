/**
 * Pentagram Star
 * Creates an optimized pentagram star shape
 *
 */
import {SVGProps} from 'react'
import {flag} from '../src/globals'

interface Props extends SVGProps<SVGPolygonElement> {
  /* the star radius */
  r?: number
  cx?: number
  cy?: number
}

export default ({r = 100, cx = flag.width / 2, cy = flag.height / 2, ...props}: Props) => {

  const coordinate = [
    [2.4, 34.6],
    [97.6, 34.6],
    [20.6, 90.6],
    [50, 0],
    [79.4, 90.6],
  ]

  const offsetX = cx - r / 2
  const offsetY = cy - r / 2

  let points = ''

  coordinate.forEach(
    ([x, y]) => {
      points += `
      ${Math.round((x * r / 100) + offsetX)},
      ${Math.round((y * r / 100) + offsetY)}
       `
    })

  return <polygon points={points} {...props}/>
}