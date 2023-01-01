// components
import MyDisclosure from './components/MyDisclosure'

// styles
import './App.css'

function App() {
  return (
    <div className="app-body">
      <header id="wrc" className="App-header">
        {/* foo bar */}
        <h2>Lorem ipsum</h2>
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Cras
          mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Donec id elit non mi porta gravida at
          eget metus.
        </p>
        <p>
          Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec id elit non mi porta gravida at eget metus. Etiam porta
          sem malesuada magna mollis euismod.
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
