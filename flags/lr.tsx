/**
 * Liberia
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import Square from '../tools/Square'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper fill="#fff">
  <Square/>
  <StripesHorizontal colors={["#BF0A30",null]} count={11}/>
  <Square fill="#002868" x2={218.1} y2={218.1}/>
  <PentaStar cx={109} cy={109} r={132}/>
</SvgWrapper>