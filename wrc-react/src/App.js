// components
import MyDisclosure from './components/MyDisclosure'

// styles
import './App.css'

function App() {
  return (
    <div className="app-body">
      <header id="wrc" className="app-header">
        <h1 className="pathway">
          Proin ac ullam corper lorem. Morbi tellus sem, tempor eget neque et,
          ullamcorper cond imentum ligula.
        </h1>
        <div>
          <div className="TBD">
            <div className="toggle">TBD EMPLOYER / EMPLOYEE toggle</div>
          </div>
          <div className="tool-container">
            {/* <h2>How can we help</h2> */}
            <MyDisclosure />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
