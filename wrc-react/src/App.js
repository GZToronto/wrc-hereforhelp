// components
import DecisionTreeTool from './components/DecisionTreeTool'

// styles
import './App.css'
import ResourcesTabTool from './components/ResourcesTabTool'

// const DisplayChoices = (choice) => {
//   console.log(choice)
// }

function App() {
  return (
    <>
      <div className="app-body">
        <section id="wrc" className="app-header pathway">
          {/* <h1 className="pathway">
            Sexual harassment is any unwelcome conduct, comment, gesture, or
            contact that is gender-related or sexual in nature that makes the
            recipient feel uncomfortable, unsafe, offended, or humiliated,
            whether intended or not.
          </h1> */}
          <div>
            <div className="tool-container">
              <DecisionTreeTool />
            </div>
          </div>
        </section>
      </div>
      <div className="resources-tabs">
        <section id="resources" className="app-header ">
          <h4>Resources</h4>
          <h1 className="pathway">
            Morbi tellus sem, tempor eget neque et, ullamcorper condimentum
            ligula
          </h1>
          <div>
            <div className="tool-container">
              <ResourcesTabTool />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
