/**
 * Korea, Republic of South Korea
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Circle from '../tools/Circle'
import { reflect } from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#fff"/>
  <Circle fill="#CD2E3A" r={120}/>
  <path fill="#0047A0" d="M 258 177 A 1 1 0 0 0 462 303 A 59.98 59.98 0 0 0 360 240 A 59.98 59.98 0 0 1 258 177"/>
  <g id="kr-b">
    <path id="kr-a" stroke="#000" stroke-width="20" d="m168.6 184.5 66.6-99.8m-91.5 83.2L210.2 68m-91.5 83.2 66.6-99.8"/>
    <use href="#kr-a" {...reflect({})}/>
  </g>
  <use href="#kr-b" {...reflect({preset:'reflectVertical'})}/>
  <path fill="none" stroke="#FFF" stroke-width="10" d="m501.4 334.3 83.2 55.5m-29.1-280.2 25-16.6m-79.1 52.7 29.1-19.4m-366 244.1 25-16.6"/>

</SvgWrapper>