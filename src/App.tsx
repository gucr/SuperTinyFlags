import * as React from 'react'
import allFlags from '../flags/allFlags'
import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {renderToStaticMarkup} from 'react-dom/server'
import {optimize} from 'svgo'
import FlagsList from './FlagsList'


type Command = [
  any,
  any?,
  any?
]

// allFlags.sort((a,b) =>  (a.code - b.code))


const parseCommands = (commands: Command[]) => {
  return commands.map(([Component, props, children], i) => {
    if (children) {
      children = parseCommands(children)
    }
    return <Component key={i} {...props}>{children}</Component>
  })
}


function App() {

  const [hash, setHash] = useState(window.location.hash)

  window.addEventListener('hashchange', () => setHash(window.location.hash))

  const requestedFlag = hash.replace('#', '')

  if (requestedFlag) {
    return <FlagDetails flagCode={requestedFlag}/>
  }
  else {
    return <FlagsList/>
  }


  return (
    <>
      {allFlags.map(({code, Component}) => {
        return <div key={code}>
          <FlagLine href={`/#${code}`}>
            {code}
            <Component/>
            <img src={`https://flagcdn.com/${code}.svg`} height={240} alt=""/>
          </FlagLine>
        </div>
      })}
    </>
  )
}

const FlagDetails = ({flagCode = ''}) => {

  const [maskOffset, setMaskOffset] = useState(100)
  const [opacity, setOpacity] = useState(.4)
  const [xRay, setXray] = useState(false)

  const {Component} = allFlags.find(({code}) => code === flagCode)

  const svgRef = useRef()


  useEffect(() => {
    console.log(svgRef.current)

  }, [svgRef.current])

  const svgMarkup = renderToStaticMarkup(<Component/>)
  const svgoMarkup = optimize(svgMarkup, {
    multipass: true, // boolean. false by default
    js2svg: {
      indent: 2, // string with spaces or number of spaces. 4 by default
      pretty: true,
    },
    plugins: [
      // set of built-in plugins enabled by default
      'preset-default',

      // enable built-in plugins by name
      'mergePaths',
      'sortAttrs',


    ],
  }).data

  return <Wrapper>

    <Header>
      <label>
        Mask
        <input
          type="range"
          min="0" max="100" step="1"
          value={maskOffset}
          onChange={({target}) => setMaskOffset(target.value)}
        />
      </label>

      <label htmlFor="">
        Opacity
        <input
          type="range"
          min="0" max="1" step=".01"
          value={opacity}
          onChange={({target}) => setOpacity(target.value)}
        />
      </label>
      <div onClick={() => setXray(!xRay)}>
        xRay
      </div>
      <div>
        <a href={`https://flagcdn.com/${flagCode}.svg`}>FlagCDN</a>
      </div>

    </Header>

    <Comparison>
      <Image className={xRay ? 'xRay' : ''}>
        <Component ref={svgRef} xRay/>
      </Image>

      <Image
        style={{
          maskImage: `linear-gradient(to right, black 0%, black ${maskOffset}%, transparent ${maskOffset}%)`,
          opacity,
        }}>
        <img src={`/reference/${flagCode}.svg`} alt=""/>
      </Image>

      <MaskIndicator style={{left: `${maskOffset}%`}}/>
    </Comparison>


    <div>
      <h3>Svg: {svgMarkup.length} bytes</h3>
      {svgMarkup}
      <h3>Svgo: {svgoMarkup.length} bytes</h3>
      {svgoMarkup}
    </div>

  </Wrapper>
}

export default App

const Comparison = styled.div`
  height: 64vw;
  width: 96vw;
  box-shadow: 0 0 20px rgba(0, 10, 70, .4);
  position: relative;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
`

const Image = styled.div`

  &.xRay {
    path {
      fill: none;
      stroke: black;
      stroke-width: 1px;

      &[mid-marker] {
        stroke: blue !important;
      }

      &:nth-child(2) {
        stroke: orange;
      }

      &:nth-child(3) {
        stroke: #727220;
      }

      &:nth-child(4) {
        stroke: Chartreuse;
      }

      &:nth-child(5) {
        stroke: cyan;
      }

      &:nth-child(6) {
        stroke: blue;
      }

      &:nth-child(7) {
        stroke: DarkOrchid;
      }

      &:nth-child(8) {
        stroke: DeepPink;
      }

      &:nth-child(9) {
        stroke: red;
      }
    }
  }
`

const MaskIndicator = styled.div`
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: green;
  z-index: 10;
`

const Wrapper = styled.div`
  position: relative;
`



const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`