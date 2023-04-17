/**
 * Brunei Darussalam
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#f7e017"/>
  <g fill="none" strokeWidth="110">
    <path stroke="#000" d="m-121 190 961 200"/>
    <path stroke="#fff" d="m-122 89 961 200"/>
  </g>
  <path id="bn-a" fill="#CF1126" d="M360 131q14 0 18 3-1 8 7 23l-8-6-5 6-8-6v19c27-29 45 19 80 8-11 27-35 0-42 5l27 10c-10 16-27-9-36-5l23 12c-14 15-27-13-33-7l19 13c-17 17-28-20-34-9q9 16 2 25t-1 19-4 20h8q-9 6-1 24 14 29-11 33a83 83 0 0 0 71-119 92 92 0 0 1-72 151m0 4a95 95 0 0 0 70-30 1 1 0 0 1 14 15 1 1 0 0 1 18 15q11 2 9 11-19-9-37 5-17 14-20-6a95 95 0 0 1-54 16m110-83v-50q0-7 8-12t13-13q7-6 6 1l-8 21 14-9q7-9 12-26t4 4l-7 27q-18 12-19 25v32l8 19q-18 12-38 0Z"/>
  <use href="#bn-a" {...reflect({})}/>
  <path fill="#CF1126" d="M363 119v16h-4v-34l22 11-12 3 9 11Z"/>
</SvgWrapper>