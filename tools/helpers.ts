import {flag} from '../src/globals'

interface ReflectProps extends MatrixProps {
  /* Reflections presets */
  preset?: 'reflectHorizontal' | 'reflectVertical'
  /* Pivot point of an horizontal reflection */
  pivotX?: number
  /* Pivot point of a vertical reflection */
  pivotY?: number
}

/**
 * Reflect
 * Reflects an element on the other side of a provided pivot point
 * @param preset
 * @param pivotX
 * @param pivotY
 */
export const reflect = ({
  preset = 'reflectHorizontal',
  pivotX = flag.width / 2,
  pivotY = flag.height / 2,
}: ReflectProps) => {

  let scaleX, scaleY

  switch (preset) {
    case 'reflectHorizontal':
      scaleX = -1
      scaleY = 1
      pivotY = 0
  }

  switch (preset) {
    case 'reflectVertical':
      scaleX = 1
      scaleY = -1
      pivotX = 0
  }


  return matrix({
    scaleY, scaleX, offsetX: pivotX * 2, offsetY: pivotY * 2,
  })
}


interface MatrixProps {
  offsetX?: number
  offsetY?: number
  scaleX?: number
  scaleY?: number
  shearX?: number
  shearY?: number
}

export const matrix = ({
  scaleX = 0,
  shearX = 0,
  shearY = 0,
  scaleY = 0,
  offsetX = 0,
  offsetY = 0,
}: MatrixProps) => {

  return ({transform: `matrix(${scaleX} ${shearX} ${shearY} ${scaleY} ${offsetX} ${offsetY} )`})

}


export const rotate = (r = 180, cx = flag.width / 2, cy = flag.height / 2) => {

  return ({transform: `rotate(${r} ${cx} ${cy})`})
}


export const scale = (factor = 2) => {

  return ({transform: `scale(${factor})`})
}


export function hashCode(str) {

  let hash = 0
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}