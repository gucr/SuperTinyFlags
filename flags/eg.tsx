/**
 * Egypt
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <StripesHorizontal colors={["#ce1126","#fff","#000"]}/>

  <g id="a" fill="none">
    <path stroke="#c09300" d="m360 203-3-3m2-19-2 19-6 3 6-21m-5 17-8 3q11-15 10-27m-8 24q-5 2-20-6t-18 7m52 5q-10 7-24 7 0 31 24 50m-18-22-14 49m4 1 21-34 2 11-16 24-6-19 16-21-4-6 5 42m-5 5-7-37m22 41q-29 0-38-4l-11 8 6 10q12 5 43 5m-38-23q-2-6 3-4 11 4 29 4m0 2q-17 1-30-4m-19 2 30-27m-9 32-2 7 7 2 1-4m-4-1-1 3m7 2 10 2 1-7 2 0-1 8m4-3 1 2 6 1"/>
    <path fill="#c09300" d="m315 197-4 91-7 5 4-93zm8 7-4 76-6 6 4-88zm7 6-3 63-5 4 3-71zm6 3-1 53-5 5 2-60zm6 27-4 14 1-22zm11-28v40q-13-14-15-37zm7 49-4-3-6 29 2 3 3-2 3-20-1 20 3 3"/>
  </g>
  <path fill="#c09300" d="m366.5 177q1.5-8-1.5-11t-10-2q-10-2-8 5 7-2 6.4 8h1.1q.5-2-.5-5l3-1q-5-5-9-3 0-6 11 1l6-2q2 5 .5 10"/>

  <use href="#a" {...reflect({})}/>
</SvgWrapper>