/**
 * Guernsey
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import Cross from '../tools/Cross'

export default () => <SvgWrapper>
  <Square fill="#fff"/>
  <Cross strokeWidth={120} stroke="#e8112d"/>
  <path fill="#f9dd16" d="m180 280 20-20h140v140l-20 20h80l-20-20V260h140l20 20v-80l-20 20H380V80l20-20h-80l20 20v140H200l-20-20z"/>
</SvgWrapper>