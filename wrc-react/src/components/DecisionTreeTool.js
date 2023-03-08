// components
import { DecisionTree } from './Choices'

// styles
import './DecisionTreeTool.css'

function DecisionTreeTool() {
  return (
    <>
      <h2>How can we help?</h2>
      <p className="pathway-header">
        The climate, culture, and/or conduct in my workplace is concerning and I
        want help.
      </p>
      <DecisionTree />
    </>
  )
}

export default DecisionTreeTool
