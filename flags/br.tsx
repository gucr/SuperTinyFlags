/**
 * Brazil
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Circle from '../tools/Circle'
import Star from '../tools/Star'
import Pa from './pa'
import RepeatOnPath from '../tools/RepeatOnPath'

export default () => <SvgWrapper fill="none">

  <Square fill="#009B3A"/>
  <Circle r={130} fill="#002776"/>

  <path stroke="#fff" strokeWidth="19" d="M233 202a287 287 0 01255 74"/>
  <path fill="#fedf00" d="m75.4 240 284.6 181.7 284.6-181.7-284.6-181.7zm283.6 120a120 120 0 112 0"/>

  <path stroke="#009B3A" strokeWidth="8" d="M252 200a287 287 0 0169-1m15 2 6 1m16 3a287 287 0 01114 57"/>

  <marker id="br-a" markerHeight="11" markerWidth="11">
    <Star fill="#fff" ends={5} diameter={10} innerDiameter={4} x={5} y={5}/>
  </marker>

  <g markerMid="url(#br-a)">
    <path d="m451.5 277.5h-12l5 11-7 9-22 16-24 3 1-119-23 68-14 24v-35l-48 45-14-23 16-36-56 35 15-11-11-51h-10"/>
    <path strokeWidth=".5" d="m454 280h4l-29 25-12-3v25l-14-21-20-2 7-74-32 102-6-56-7-9-54 23-9-31h-9"/>
  </g>
</SvgWrapper>