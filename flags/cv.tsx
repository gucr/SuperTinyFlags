/**
 * Cape Verde
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import PentaStar from '../templates/PentaStar'
import RepeatOnPath from '../tools/RepeatOnPath'
import Square from '../tools/Square'
import {flag} from '../src/globals'

export default () => <SvgWrapper>
  <Square fill="#003893"/>
  <Square fill="#CF2027" stroke="#FFF" strokeWidth={40} x1={-50} x2={flag.width + 50} y1={260} y2={340}/>

  <RepeatOnPath path="m0 0 263 156 71 23 43 60v74l-43 60-71 23-70-23-44-60v-74l44-60Z">
    <PentaStar fill="#F7D116" cx={23} cy={24} r={48}/>
  </RepeatOnPath>

</SvgWrapper>