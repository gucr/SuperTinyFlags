/**
 * Georgia
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Cross from '../tools/Cross'
import RepeatOnPath from '../tools/RepeatOnPath'

export default () => <SvgWrapper>
  <Square fill="#fff"/>
  <path fill="#fff" d="M0 0h720v480H0z"/>
  <Cross stroke="red" strokeWidth="96"/>
  <RepeatOnPath path="m0 0 107 47h408v288H107Z">
    <path fill="red" d="M32 0q17 2 34 0-10 49 0 98-17-2-34 0 10-49 0-98m66 32q-2 17 0 34-49-10-98 0 2-17 0-34 49 10 98 0"/>
  </RepeatOnPath>
</SvgWrapper>