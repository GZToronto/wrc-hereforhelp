import { Disclosure, Transition } from '@headlessui/react'
// import { Disclosure } from '@headlessui/react'

// styles
import './MyDisclosure.css'

function MyDisclosure() {
  return (
    <>
      {/*  */}
      {/*  */}
      {/*  */}
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
            <Disclosure.Button className="tool-response inline">
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
              <p className="tool-response inline">
                <a href="foo">By email: </a>
              </p>
              <p className="tool-response inline">
                <a href="foo">By telephone: 1-800-111-1234 </a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <p className="tool-response">
            <a href="foo">I’d like to review relevant information</a>
          </p>
          <p className="tool-response">
            <a href="foo">Exit</a>
          </p>
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>

      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {/*  */}
      {/* ITEM 2 */}
      <Disclosure>
        <Disclosure.Button className="tool-question">
          Help me make sense of my employment rights
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
            <Disclosure.Button className="tool-response inline">
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
              <p className="tool-response inline">
                <a href="foo">By email: </a>
              </p>
              <p className="tool-response inline ">
                <a href="foo">By telephone: 1-800-111-1234 </a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inline">
              I’d like to review information about employment rights
            </Disclosure.Button>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <p className="tool-response inline half">
                  <a href="foo">Website 1</a>
                </p>
                <p className="tool-response inline half">
                  <a href="foo">Website 2</a>
                </p>
                <p className="tool-response inline half">
                  <a href="foo">Website 3</a>
                </p>
                <p className="tool-response inline half">
                  <a href="foo">Website 4</a>
                </p>
                {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
              </Disclosure.Panel>
            </Transition>
          </Disclosure>{' '}
          <p className="tool-response">
            <a href="foo">Exit</a>
          </p>
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>

      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {/*  */}
      {/* ITEM 3 */}
      <Disclosure>
        <Disclosure.Button className="tool-question">
          Help me make sense of my legal options
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
            <Disclosure.Button className="tool-response inline">
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
              <p className="tool-response inline">
                <a href="foo">By email: </a>
              </p>
              <p className="tool-response inline">
                <a href="foo">By telephone: 1-800-111-1234 </a>
              </p>
              {/* <p className="tool-response ">
              <a href="foo">By chat: </a>
            </p> */}
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inline">
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
              <p className="tool-response inline half">
                <a href="foo">Website 1</a>
              </p>
              <p className="tool-response inline half">
                <a href="foo">Website 2</a>
              </p>
              <p className="tool-response inline half">
                <a href="foo">Website 3</a>
              </p>
              <p className="tool-response half ">
                <a href="foo">Website 4</a>
              </p>
            </Disclosure.Panel>
            {/* </Transition> */}
          </Disclosure>
          <Disclosure>
            <Disclosure.Button className="tool-response inline">
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
          <p className="tool-response">
            <a href="foo">Exit</a>
          </p>
        </Disclosure.Panel>
        {/* </Transition> */}
      </Disclosure>
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
