// components
import MyDisclosure from './components/MyDisclosure'

// styles
import './App.css'

function App() {
  return (
    <div className="app-body">
      <header id="wrc" className="App-header">
        {/* foo bar */}
        <h2>Guided Pathway</h2>

        <div className="TBD">
          <div className="toggle">TBD EMPLOYER/EMPLOYEE toggle</div>
        </div>
        <p>
          The climate, culture, and/or conduct in my workplace is concerning and
          I want help.
        </p>
        <div className="tool-container">
          <h2>How can we help</h2>
          <MyDisclosure />
        </div>
      </header>
    </div>
  )
}

export default App
