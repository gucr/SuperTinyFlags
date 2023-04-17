/**
 * Australia
 *
 */
import React from 'react'
import UnionJack from '../templates/UnionJack'
import Square from '../tools/Square'
import Star from '../tools/Star'
import Reuse from '../tools/Reuse'
import {scale} from '../tools/helpers'
import SvgWrapper from '../tools/SvgWrapper'

export default () => <SvgWrapper fill="#fff">
  <Square fill="#012169"/>
  <Star id="a" ends={7} diameter={67} innerDiameter={30} x={544} y={82}/>
  <Star ends={5} diameter={38} innerDiameter={18} x={579} y={261}/>
  <Reuse id="a" instances={[
    {x: 80, y: 99},
    {x: -90, y: 130},
    {y: 320},
    {x: -454, y: 97.4, ...scale(2)},
  ]}/>
  <UnionJack/>
</SvgWrapper>