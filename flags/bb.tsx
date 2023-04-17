/**
 * Barbados
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#00267f"/>
  <Square fill="#ffc726" x1={240} x2={480}/>
  <path id="bb-a" d="m359 357 1-233q15 42 33 60-10-3-20-3v90l26 4q3-48 20-86 8-12-10-4 19-21 52-28 5-1 1 4-47 72-46 138l-43-6v64z"/>
  <use href="#bb-a" {...reflect({})}/>
</SvgWrapper>