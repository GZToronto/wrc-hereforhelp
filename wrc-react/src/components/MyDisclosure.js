// import { Disclosure, Transition } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'

// assets
// import arrow from '../images/arrow.svg'

// styles
import './MyDisclosure.css'

// let arrow =
//   'https://images.squarespace-cdn.com/content/6356d348273dcd0e61254e5c/6d679a82-73fc-43e4-8784-6f032989c508/arrow%404x.png?content-type=image%2Fpng'
let arrow =
  'https://images.squarespace-cdn.com/content/6356d348273dcd0e61254e5c/56ceef9e-84fc-4f75-9be3-043c77826a0b/chevron%404x.png?content-type=image%2Fpng'

function MyDisclosure() {
  return (
    <>
      <h2>How can we help?</h2>
      {/* <hr /> */}
      <p className="pathway-header">
        The climate, culture, and/or conduct in my workplace is concerning and I
        want help.
      </p>
      <p className="tool-question select">
        <em>Select one</em>
        <img src={arrow} className="tool-question-arrow" alt="" />
      </p>
      {/* ITEM 1 */}
      <Disclosure>
        <Disclosure.Button className="tool-question">
          Help me make sense of what happened
        </Disclosure.Button>
        {/* <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      > */}
        <Disclosure.Panel>
          {/* works as single item */}
          {/* <p className="tool-response">
            <a href="foo">
              I'd like to connect with someone to help me make sense of what
              happened.
            </a> 
            </p> */}

          {/* nested option */}
          <Disclosure>
            <Disclosure.Button className="tool-response inner">
              <span className="bullet">&#9210; &nbsp;</span>
              I'd like to connect with someone to help me make sense of what
              happened
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response inner contact">
                By email: <a href="foo">abc@example.com</a>
              </p>
              <p className="tool-response inner contact">
                By telephone: <a href="foo">1-800-111-1234 </a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <p className="tool-response inner">
            <span className="bullet">&#9210; &nbsp;</span>
            I’d like to review relevant information
          </p>
          {/* <p className="tool-response">
            <a
              href=""
              // onClick={() => {
              //   // await fetch('/accept-terms', { method: 'POST' })
              //   // eslint-disable-next-line
              //   close()
              // }}
            >
              Exit
            </a>
          </p> */}
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>

      {/* ITEM 2 */}
      <Disclosure>
        <Disclosure.Button className="tool-question">
          Help me make sense of my employment rights
          {/* <img src={arrow} className="tool-question-arrow" alt="" /> */}
        </Disclosure.Button>
        {/* <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      > */}
        <Disclosure.Panel>
          {/* works as single item */}
          {/* <p className="tool-response">
            <a href="foo">
              I'd like to connect with someone to help me make sense of what
              happened.
            </a> 
            </p> */}
          {/* nested option */}
          <Disclosure>
            <Disclosure.Button className="tool-response inner">
              <span className="bullet">&#9210; &nbsp;</span>
              I’d like to connect with someone to help me make sense of my
              employment rights
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response inner contact">
                By email: <a href="foo">abc@example.com</a>
              </p>
              <p className="tool-response inner contact">
                By telephone: <a href="foo">1-800-111-1234 </a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inner">
              <span className="bullet">&#9210; &nbsp;</span>
              I’d like to review information about employment rights
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response inner half">
                <a href="foo">Website 1</a>
              </p>
              <p className="tool-response inner half">
                <a href="foo">Website 2</a>
              </p>
              <p className="tool-response inner half">
                <a href="foo">Website 3</a>
              </p>
              <p className="tool-response inner half">
                <a href="foo">Website 4</a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          {/* <p className="tool-response">
            <a href="foo">Exit</a>
          </p> */}
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>

      {/* ITEM 3 */}
      <Disclosure>
        <Disclosure.Button className="tool-question">
          Show me related law and legislation information{' '}
          {/* <img src={arrow} className="tool-question-arrow" alt="" /> */}
        </Disclosure.Button>
        {/* <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      > */}
        <Disclosure.Panel>
          {/* works as single item */}
          {/* <p className="tool-response">
            <a href="foo">
              I'd like to connect with someone to help me make sense of what
              happened.
            </a> 
            </p> */}
          {/* nested option */}
          <Disclosure>
            <Disclosure.Button className="tool-response inner ">
              <span className="bullet">&#9210; &nbsp;</span>
              I’d like to connect with someone to help me make sense of my legal
              options
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response inner contact">
                By email: <a href="foo">abc@example.com</a>
              </p>
              <p className="tool-response inner contact">
                By telephone: <a href="foo">1-800-111-1234 </a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inner">
              <span className="bullet">&#9210; &nbsp;</span>
              I’d like to review information about legal options
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response inner half">
                <a href="foo">Website 1</a>
              </p>
              <p className="tool-response inner half">
                <a href="foo">Website 2</a>
              </p>
              <p className="tool-response inner half">
                <a href="foo">Website 3</a>
              </p>
              <p className="tool-response half ">
                <a href="foo">Website 4</a>
              </p>
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inner">
              <span className="bullet">&#9210; &nbsp;</span>
              I’d like to explore filing a human rights complaint
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response half">
                <a href="foo">Website 1</a>
              </p>
              <p className="tool-response half">
                <a href="foo">Website 2</a>
              </p>
              <p className="tool-response half">
                <a href="foo">Website 3</a>
              </p>
              <p className="tool-response half ">
                <a href="foo">Website 4</a>
              </p>
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          {/* <p className="tool-response">
            <a href="foo">Exit</a>
          </p> */}
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>

      {/* ITEM 4 */}
      <Disclosure>
        <Disclosure.Button className="tool-question">
          Help me understand my options and rights
          {/* <img src={arrow} className="tool-question-arrow" alt="" /> */}
        </Disclosure.Button>
        <Disclosure.Panel>
          <p className="tool-response no-borders no-hover">
            Navigating these various resources can be challenging and confusing
            — we are here to help.
          </p>
          <Disclosure>
            <Disclosure.Button className="tool-response no-borders">
              <p className="tool-response no-borders">
                <span className="bullet">&#9210; &nbsp;</span>
                I’d like to connect with someone to help me make sense of
                available resources, such as:
              </p>
              <p className="tool-response inner half no-borders">
                Occupational Health and Safety
              </p>
              <p className="tool-response inner half no-borders">
                Employment Insurance (EI)
              </p>
              <p className="tool-response inner half no-borders">
                Employment Standards
              </p>
              <p className="tool-response half no-borders">Human Rights</p>
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response inner contact">
                <a href="foo">By email:</a>
              </p>
              <p className="tool-response inner contact">
                <a href="foo">By phone:</a>
              </p>
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inner">
              <span className="bullet">&#9210; &nbsp;</span>
              I’d like to explore filing a human rights complaint
            </Disclosure.Button>
            {/* <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            > */}
            <Disclosure.Panel>
              <p className="tool-response half">
                <a href="foo">Website 1 Nibh Vestibulum Mollis Condimentum</a>
              </p>
              <p className="tool-response half">
                <a href="foo">Website 2 Amet Magna Ullamcorper</a>
              </p>
              <p className="tool-response half">
                <a href="foo">Website 3 Euismod Vestibulum Fermentum Risus</a>
              </p>
              <p className="tool-response half ">
                <a href="foo">Website 4 Venenatis Ultricies Vestibulum</a>
              </p>
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          {/* <p className="tool-response">
            <a href="foo">Exit</a>
          </p> */}
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>

      <p className="closeButton">Restart</p>
    </>
  )
}

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke-width="1.5"
//   stroke="currentColor"
//   class="w-6 h-6"
// >
//   <path
//     stroke-linecap="round"
//     stroke-linejoin="round"
//     d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//   />
// </svg>

export default MyDisclosure
