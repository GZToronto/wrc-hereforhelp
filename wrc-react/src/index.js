import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

var nearest
const tool = document.getElementById('wrcTool')
// var nearest = tool.closest('.fluid-engine').className.substring(13)
if (tool.closest('.fluid-engine') !== null || undefined) {
  // console.log(tool.closest('.fluid-engine'))
  nearest = tool
    .closest('.fluid-engine')
    .classList.add('squarespace-platform-width-override')
  console.log(nearest)
} else {
  console.log(
    'Squarespace interface not detected. Skipping classList addition.'
  )
}

const root = ReactDOM.createRoot(document.getElementById('wrcTool'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
