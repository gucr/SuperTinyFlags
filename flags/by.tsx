/**
 * Belarus
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect, matrix} from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#ce1720"/>
  <Square fill="#007c30" y1={320} x1={107}/>

  <g {...matrix({scaleX:5, scaleY:8, offsetX:-2.5})}>
    <g id="by-b">
      <path id="a" stroke="#fff" d="M1 0v1m0 1v2m0 1v2m0 1v3m0 1v2m0 2v3m0 2v2m0 1v1m0 2v4m1 0v-3m0-2v-4m0-5v-4m0-3V6m0-3V0m1 0v2m0 5v2m0 2v1m0 2v2m0 7v4m0 2v2m1-3v-4m0-9v-2m0-3V8m0-3V4m0-3V0m1 3v3m0 3v2m0 1v2m0 5v1m0 3v4m1 4v-2m0-3v-4m0-2v-1m0-6v-3m0-3V5m0-1V2m1 1v3m0 3v2m0 1v2m0 5v6m0 3v2m1 1v-3m0-4v-4m0-5v-2m0-3V8m0-3V4m0-3V0m1 0v2m0 5v2m0 2v1m0 2v2m0 5v2m0 4v4m1 0v-1m0-2v-2m0-9v-4m0-3V6m0-3V0m1 2v2m0 1v2m0 2v2m0 1v2m0 2v2m0 6v5"/>
      <use href="#a" {...reflect({preset:'reflectHorizontal',pivotX:11.2})}/>
    </g>
    <use href="#by-b" transform="rotate(180 11.25 30.5)"/>
  </g>
</SvgWrapper>