// components
import MyDisclosure from './components/MyDisclosure'

// styles
import './App.css'

// const json =
//   'https://smilodon-violin-sppr.squarespace.com/help/?format=json-pretty'

// async function getJson(source) {
//   try {
//     let response = await fetch(source)
//     let responseJson = await response.json()
//     return responseJson.movies
//   } catch (error) {
//     console.error(error)
//   }
// }

// const DisplayChoices = (choice) => {
//   console.log(choice)
// }

function App() {
  return (
    <div className="app-body">
      <header id="wrc" className="app-header">
        <h1 className="pathway">
          Sexual harassment is any unwelcome conduct, comment, gesture, or
          contact that is gender-related or sexual in nature that makes the
          recipient feel uncomfortable, unsafe, offended, or humiliated, whether
          intended or not.
        </h1>
        <div>
          {/* <div className="TBD">
            <div className="toggle">TBD EMPLOYER / EMPLOYEE toggle</div>
          </div> */}
          <div className="tool-container">
            {/* <h2>How can we help</h2> */}
            <MyDisclosure />
            {/* {DisplayChoices(getJson(json))} */}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
