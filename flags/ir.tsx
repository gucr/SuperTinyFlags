/**
 * Iran, Islamic Republic of Persian Gulf
 *
 */
import SvgWrapper from '../tools/SvgWrapper'
import StripesHorizontal from '../tools/StripesHorizontal'
import RepeatOnPath from '../tools/RepeatOnPath'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <StripesHorizontal colors={['#239f40', '#fff', '#da0000']}/>
  <RepeatOnPath
    path="M-124 134h74.7 74.7 74.7 74.7 74.7 74.7 74.7 74.7 74.7H623h74.7 74.7"
    pathProps={{id:'ir-a'}}
  >
    <path strokeWidth={3.7} fill="none" stroke="#fff" d="M0 2h49M2 19V9h15v8h15V9H22M7 17h4m37 0h-9V9h15m0-9v17h15V0m-7 0v17"/>
  </RepeatOnPath>
  <use href="#ir-a" y={193.7}/>
  <path id="ir-b" fill="#da0000" d="M360 184a8 8 0 0 0 15-2 8 8 0 0 1-15 8m0 3q3 4 7 6v35l-2 45a60 60 0 0 0 15-82 56 56 0 0 1-10 90q13 4 23 3-14 5-28 2v2l-5 6m37-20a60 60 0 0 0-12-84 46 46 0 0 1 12 84"/>
  <use href="#ir-b" y={193.7} {...reflect({})}/>
</SvgWrapper>