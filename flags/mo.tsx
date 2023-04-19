/**
 * Macao
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect} from '../tools/helpers'
import {flag} from '../src/globals'

export default () => <SvgWrapper>
  <Square fill="#00785e"/>
    <g id="mo-a">
    <path fill="#fff" d="M360 154q-48 48-15 106-28-39-9-84l-7-13q-24 46 5 88-30-31-73-30l7 9q42 2 68 29-44-34-97-14 24 54 82 52-41 6-70-21l-11 1a81 81 0 0 0 122 1m-2 11q-23 21-51 22h-68l5 8h59q33 1 56-20m-1 28H253l5 5h103m-1 8h-94l8 6h87m-1 6h-77l15 8h63m-1 4h-53q24 11 54 11"/>
    <path fill="#fbd116" d="m241 175 25 24-7-34-15 31 30-17zm37-32 35 1-28-21 10 33 11-33zm82-52v36l-15 11 5-18-15-11h19z"/>
  </g>
  <use href="#mo-a" {...reflect({})} />
</SvgWrapper>