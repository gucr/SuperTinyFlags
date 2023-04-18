/**
 * United Kingdom
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import {rotate} from '../tools/helpers'
import Square from '../tools/Square'

export default () => <SvgWrapper>
  <Square fill="#222d65"/>
  <g id="gb-b">
    <path fill="#fff" d="m84 0H0v55l159 106H0v158h159L0 425v55h82l205-137v137H361V0H287v137z"/>
    <path fill="#c8102e" d="M0 0V37L187 161h54ZM241 319h46v6L55 480H0Zm77-30V480h43V0H318V191H0v98Z"/>
  </g>
  <use href="#gb-b" {...rotate(180)}/>
</SvgWrapper>