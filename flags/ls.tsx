/**
 * Lesotho
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#fff"/>
  <Square fill="#001489" y2={144}/>
  <Square fill="#009a44" y1={336}/>

  <path id="a" d="m360 152q4 0 6 3a33 52 19 0114 77l38 51 6-3 14 29a170 170 0 01-79 19v-10a170 170 0 0066-14l-7-15a150 150 0 01-59 12zm15 73a24 43 17 00-9-62v25l12 11h-9v18z"/>
  <use href="#a" {...reflect({})}/>
  <g fill="none" stroke="#000">
    <path strokeWidth="7" d="m303 289 9 25m10-21 11 27m9-23 12 24m11-24 13 22m7-24 14 21m4-25 16 20"/>
    <path strokeWidth="4" d="m292 304 15-4 2 6 16-4 5 9 15-6 5 9 19-10 5 9 16-10 5 7 14-12 4 7 11-12"/>
  </g>
</SvgWrapper>