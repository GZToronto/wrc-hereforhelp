// components
import { DecisionTree } from './Choicesv2'
// import AnimateHeight from 'react-animate-height'
import React, { useState } from 'react'

// styles
import './DecisionTreeTool.css'

function DecisionTreeTool() {
  const [height, setHeight] = useState('auto')

  return (
    <>
      {/* <h2>How can we help?</h2> */}
      <h2>How can we help?</h2>
      <DecisionTree />
    </>
  )
}

export default DecisionTreeTool
