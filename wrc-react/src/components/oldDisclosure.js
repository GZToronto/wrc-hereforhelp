{
  /* ITEM 1 */
}

;<Disclosure>
  <Disclosure.Button className="tool-question">
    {/* {items[0][1].heading} */}
    {/* <ShowChoices choice={currentChoice} /> */}
  </Disclosure.Button>
  <Disclosure.Panel>
    {({ close }) => (
      <>
        <Disclosure>
          {/* <LoopItems /> */}
          <>
            {Object.entries(target).map((item) => (
              <>
                <Disclosure.Button className="tool-response inner">
                  <span className="bullet">&#9210; &nbsp;</span>
                  {item[1].question}
                </Disclosure.Button>
                <Disclosure.Panel>
                  {/* {item[1].options[0]} */}
                  {/* <p className="tool-response inner contact">
                          By email: <a href="foo">abc@example.com</a>
                        </p>
                        <p className="tool-response inner contact">
                          By telephone: <a href="foo">1-800-111-1234 </a>
                        </p> */}
                  {/* <p className="tool-response ">
                          <a href="foo">By chat: </a>
                        </p> */}
                </Disclosure.Panel>
              </>
            ))}
          </>
        </Disclosure>
        <p className="tool-response inner">
          <span className="bullet">&#9210; &nbsp;</span>
          FOO I’d like to review relevant information
        </p>
        <p className="tool-response">
          <a
            href="/"
            onClick={() => {
              // await fetch('/accept-terms', { method: 'POST' })
              // eslint-disable-next-line
              close()
            }}
          >
            Exit
          </a>
        </p>
      </>
    )}
  </Disclosure.Panel>
  <Disclosure.Button className="tool-question">{items[1][1]}</Disclosure.Button>
  <Disclosure.Panel>
    {({ close }) => (
      <>
        <Disclosure>
          <Disclosure.Button className="tool-response inner">
            <span className="bullet">&#9210; &nbsp;</span>
            I'd like to connect with someone to help me make sense of what
            happened
          </Disclosure.Button>
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
        <p className="tool-response">
          <a
            href="/"
            onClick={() => {
              // await fetch('/accept-terms', { method: 'POST' })
              // eslint-disable-next-line
              close()
            }}
          >
            Exit
          </a>
        </p>
      </>
    )}
  </Disclosure.Panel>
</Disclosure>
