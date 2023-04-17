/**
 * Faroe Islands
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Cross from '../tools/Cross'

export default () => <SvgWrapper>
  <Square fill="#fff"/>
  <Cross x={240} strokeWidth={120} stroke="#005eb8"/>
  <Cross x={240} strokeWidth={60} stroke="#ef3340"/>
</SvgWrapper>