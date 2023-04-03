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
        <section id="wrc" className="app-header">
          <div>
            <div className="tool-container">
              <DecisionTreeTool />
            </div>
          </div>
          <h1 className="pathway">
            {/* Sexual harassment is any unwelcome conduct, comment, gesture, or
            contact that is gender-related or sexual in nature that makes the
            recipient feel uncomfortable, unsafe, offended, or humiliated,
            whether intended or not. */}
            We have created this tool for you to click through. It will help you
            find the information you are looking for and can connect you to
            someone who understands. If you aren’t ready to chat, you can find
            websites to browse down below.
          </h1>
        </section>
      </div>
      <div className="resources-tabs">
        <section id="resources" className="app-header ">
          <h4>Resources</h4>
          <h1 className="pathway">
            Placeholder lorem ipsum morbi tellus sem, tempor eget neque et,
            ullamcorper condimentum ligula.
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
