/**
 * Panama
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import PentaStar from '../templates/PentaStar'
import Compound from '../tools/Compound'
import Star from '../tools/Star'

export default () => <SvgWrapper>
  <Square fill="#072357" x2={360}/>
  <Square fill="#DA121A" x1={360}/>
  <path id="pa-a" fill="#fff" d="M0 0H360V240H0ZM180 60 167 101H123L158 127 145 168 180 143 215 168 202 127 238 101H194Z"/>
  <use href="#pa-a" x={360} y={240}/>
</SvgWrapper>