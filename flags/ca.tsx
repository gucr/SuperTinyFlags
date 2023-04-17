/**
 * Canada
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#D52B1E"/>
  <path id="ca-a" fill="#fff" d="m180 0h180v89l-25 49q-3.1 4.1-7 2l-24-14 15 79a5 5 0 01-8 4.5l-32-34.5-8.2 19q-1.8 3.7-7.8 2l-38-8 14 43q1 4-3.1 5.8l-15.9 7.2 71 57q3 2 1 7l-8 23 64-11.3q9-.7 8 9.3l-3 63h7v88h-180z"/>
  <use href="#ca-a" {...reflect({pivotX:359.9})}/>

</SvgWrapper>