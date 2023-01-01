// components
import MyDisclosure from './components/MyDisclosure'

// styles
import './App.css'

function App() {
  return (
    <div className="app-body">
      <header id="wrc" className="App-header">
        foo bar
        <h2>How can we help</h2>
        <div className="tool-container">
          <h2>How can we help</h2>
          <MyDisclosure />
        </div>
      </header>
    </div>
  )
}

export default App
