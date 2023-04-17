/**
 * Angola
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import RepeatOnPath from '../tools/RepeatOnPath'

export default () => <SvgWrapper>
  <Square/>
  <Square fill="#CC092F" y2={240}/>
  <RepeatOnPath  orient="auto" refX="11" path="m345 86 48 13 40 32 25 45 6 53-15 49-31 40-46 25-49 6-46-12-41-30">
    <path fill="#FFCB00" d="M23 1H1L0 16h24z"/>
  </RepeatOnPath>
  <path fill="none" stroke="#FFCB00" strokeWidth="18" d="M355 108a112 112 0 1 1-93 197"/>
  <path d="m393 295 42 32h-44l-52-32z"/>
  <path fill="#FFCB00" d="M313 165h76l-62 45 24-73 24 73zm129 176-115-87-1 1 115 88-7 9-112-72q-36-21-23-50l5-13q4 20 39 44l101 77zm29 23a2 2 0 1 1-1 0m-6-5a2 2 0 1 1-1 0m-6-6a2 2 0 1 1-1 0m24 14-34-27-10 13 31 22a10 9 45 1 0 13-8z"/>
</SvgWrapper>
