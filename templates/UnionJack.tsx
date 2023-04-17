import {rotate} from '../tools/helpers'

export default () => <>
  <g id="b">
    <path d="M42 0H0v32l73 48H0v80h76L0 210v30h46l90-60v60h46V0h-46v62Z"/>
    <path fill="#c8102e" d="M0 0v21l89 59h33Zm121 160h15v10L30 240H0Zm33-15v95h29V0h-29v97H0v48Z"/>
  </g>
  <use href="#b" {...rotate(180, 180, 120)}/>
</>