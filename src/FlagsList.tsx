import styled from 'styled-components'
import allFlags from '../flags/allFlags'
import * as React from 'react'

interface Props {

}

const FlagsList = ({...props}:Props) => {

  return <Wrapper {...props}>
    {allFlags.map(({code, Component}) => {
        return <div key={code}>
          <FlagLine href={`/#${code}`}>
            <Code>{code}</Code>
            <Component/>
            <img src={`https://flagcdn.com/${code}.svg`} height={240} alt=""/>
          </FlagLine>
        </div>
      })}
  </Wrapper>
}

export default FlagsList

const Wrapper = styled.div`
  
`

const FlagLine = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  column-gap: 10px;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  
  > * {
    height: 100px;
    font-size: 16px;
    font-family: Monaco;
  }
`

const Code = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #26454f;
  padding: 10px;
  line-height: 100px;
`