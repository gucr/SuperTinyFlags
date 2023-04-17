/**
 * India
 *
 */
import SvgWrapper from '../tools/SvgWrapper'
import React from 'react'
import StripesHorizontal from '../tools/StripesHorizontal'
import Circle from '../tools/Circle'
import RepeatOnPath from '../tools/RepeatOnPath'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper fill="#008">
  <StripesHorizontal colors={['#f93', '#fff', '#128807']}/>
  <Circle r={64}/>
  <Circle r={33.5} stroke="#fff" strokeWidth={45}/>

  <RepeatOnPath
    path="M345.5 185.9 360 184l14.5 1.9 13.5 5.6 11.6 8.9 8.9 11.6 5.6 13.5L416 240l-1.9 14.5-5.6 13.5-8.9 11.6-11.6 8.9-13.5 5.6L360 296l-14.5-1.9"
    orient="auto"
    refX={10}
    refY={3}
    pathProps={{id: 'in-b'}}
  >
    <path d="m10 3 2 34-2 15-2-15zM0 4a2.8 2.8 0 1 0 0-1z"/>
  </RepeatOnPath>
  <use href="#in-b" {...reflect({})}/>

</SvgWrapper>
