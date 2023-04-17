/**
 * Cameroon
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesVertical from '../tools/StripesVertical'
import PentaStar from '../templates/PentaStar'

export default () => <SvgWrapper>
  <StripesVertical colors={['#007a5e', '#ce1126', '#FCD116']}/>
  <PentaStar fill="#FCD116" r={128}/>

</SvgWrapper>