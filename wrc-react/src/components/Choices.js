import React, { useState } from 'react'

let arrow =
  'https://images.squarespace-cdn.com/content/6356d348273dcd0e61254e5c/56ceef9e-84fc-4f75-9be3-043c77826a0b/chevron%404x.png?content-type=image%2Fpng'

const decisionTree = {
  options: {
    'Help me make sense of what happened.': {
      options: {
        'I’d like to connect with someone to help me make sense of what happened.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            "Contact the Workers' Resource Centre": {
              result: {
                organization: "Workers' Resource Centre",
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: [null, null],
                email: 'quinn@helpwrc.org',
                phone: '587-374-5326',
              },
            },
          },
        },
        'I’d like to review relevant information': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            'Contact the Alberta Civil Liberties Research Centre (ACLRC)': {
              result: {
                organization: 'Alberta Civil Liberties Research Centre (ACLRC)',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: ['aclrc.com', 'https://aclrc.com/video-resources'],
                email: null,
                phone: null,
              },
            },
          },
        },
        'I’d like to learn more about what sexual harassment is.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            'Contact the Association of Alberta Sexual Assault Services (AASAS)': {
              result: {
                organization:
                  'Association of Alberta Sexual Assault Services (AASAS)',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: [
                  'aasas.ca',
                  'https://aasas.ca/about-sexual-violence/sexual-harassment/',
                ],
                email: null,
                phone: null,
              },
            },
          },
        },
        'I want to learn how my workplace can be more respectful.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            'Contact the Association of Alberta Sexual Assault Services (AASAS)': {
              result: {
                organization:
                  'Association of Alberta Sexual Assault Services (AASAS)',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: ['Moments Matter', 'https://momentsmatter.info'],
                email: null,
                phone: null,
              },
            },
          },
        },
      },
    },
    'Help me make sense of my employment rights.': {
      options: {
        'I’d like to connect with someone to help me make sense of my employment rights.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            "Contact the Workers' Resource Centre": {
              result: {
                organization: "Workers' Resource Centre",
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: [null, null],
                email: 'info@helpwrc.org',
                phone: '587-374-5326',
              },
            },
          },
        },
        'I’d like to review information about employment rights.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            'Contact the Centre for Public Legal Education': {
              result: {
                organization: 'Centre for Public Legal Education',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: ['cplea.ca', 'https://cplea.ca/work'],
                email: 'info@cplea.ca',
                phone: null,
              },
            },
          },
        },
        'Show me related law and legislation information.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            'Contact the Centre for Public Legal Education': {
              result: {
                organization: 'Centre for Public Legal Education',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: ['cplea.cas', 'https://cplea.ca/bullying-harassment/'],
                email: null,
                phone: null,
              },
            },
            'Contact the Association des juristes d’expression francaise de l’Alberta': {
              result: {
                organization:
                  'Association des juristes d’expression francaise de l’Alberta',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: ['ajefa.ca', 'https://ajefa.ca/'],
                email: null,
                phone: null,
              },
            },
            'Contact the Alberta Civil Liberties Research Centre': {
              result: {
                organization: 'Alberta Civil Liberties Research Centre',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: [
                  'clrc.com',
                  'https://aclrc.com/sexual-harrasmt-in-workplace',
                ],
                email: null,
                phone: null,
              },
            },
          },
        },
        'I’d like to explore filing a human rights complaint.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            'Contact the Workers’ Resource Centre': {
              result: {
                organization: "Workers' Resource Centre",
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: ['helpwrc.org', 'https://helpwrc.org'],
                email: null,
                phone: null,
              },
            },
            'Contact the Alberta Civil Liberties Research Centre (ACLRC)': {
              result: {
                organization: 'Alberta Civil Liberties Research Centre (ACLRC)',
                description:
                  'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                online: [
                  'aclrc.com',
                  'https://www.aclrc.com/sexual-harrasmt-in-workplace',
                ],
                email: null,
                phone: null,
              },
            },
          },
        },
      },
    },
  },
}

export const DecisionTree = () => {
  const [state, setState] = useState({
    currentQuestion: decisionTree,
    // previousChoices: [null],
    // breadcrumbs: [null],
    choices: [],
  })

  const clearState = () => {
    setState(() => ({
      currentQuestion: decisionTree,
      previousChoices: [],
      breadcrumbs: [],
      choices: [],
    }))
  }

  const handleChoice = (option) => {
    // console.group()
    // console.log('handleChoice: option')
    // console.log(option)
    // console.groupEnd()
    // console.log(state)

    setState((prevState) => ({
      currentQuestion: prevState.currentQuestion.options[option],
      previousChoice: option,
      // ! prev
      // choices: {
      //   ...prevState.choices,
      //   [prevState.currentQuestion.question]: option,
      // },

      choices: [...prevState.choices, option],
      // choices: [...prevState.choices],
      // previousChoices: [option],
      // breadcrumbs: [prevState.choices.question],
      // option,
      // breadcrumbs: [
      // ...prevState.previousChoice.breadcrumbs,
      // items: [option],
      // ],
      // choices: {
      // ...prevState.choices,
      //   // [prevState.currentQuestion.question]: option,
      // },
    }))
  }

  const ShowHeader = () => {
    console.group()
    console.log('len: ')
    console.log(state.choices.length)
    console.groupEnd()

    if (state.choices.length === 0) {
      return (
        <>
          {/* LEAD QUESTION */}
          <p className="pathway-header">
            The climate, culture, and/or conduct in my workplace is concerning
            and I want help.
          </p>
        </>
      )
    } else {
      return (
        <>
          {/* LEAD QUESTION */}
          <p className="pathway-header small-text">
            The climate, culture, and/or conduct in my workplace is concerning
            and I want help.
          </p>
        </>
      )
    }

    // for (var i = 0, l = state.choices.length; i < l - 1; i++) {
    //   // console.group()
    //   // console.log('previousItems')
    //   // console.log(state.choices[i - 1])
    //   // console.groupEnd()

    //   previousArray.push(state.choices[i - 1])

    //   // return <p className="choice previous highlight">{state.choices}</p>
    //   // var obj = data.messages[i]
    //   // ...
    // }
  }

  const PreviousChoices = () => {
    var previousArray = []

    for (var i = 0, l = state.choices.length; i < l - 1; i++) {
      // console.group()
      // console.log('previousItems')
      // console.log(state.choices[i - 1])
      // console.groupEnd()

      previousArray.push(state.choices[i - 1])

      // return <p className="choice previous highlight">{state.choices}</p>
      // var obj = data.messages[i]
      // ...
    }

    return (
      <>
        {state.choices[i - 12] && (
          <p className="choice previous">{state.choices[i - 12]}</p>
        )}
        {state.choices[i - 11] && (
          <p className="choice previous">{state.choices[i - 11]}</p>
        )}
        {state.choices[i - 10] && (
          <p className="choice previous">{state.choices[i - 10]}</p>
        )}
        {state.choices[i - 9] && (
          <p className="choice previous">{state.choices[i - 9]}</p>
        )}
        {state.choices[i - 8] && (
          <p className="choice previous">{state.choices[i - 8]}</p>
        )}
        {state.choices[i - 7] && (
          <p className="choice previous">{state.choices[i - 7]}</p>
        )}
        {state.choices[i - 6] && (
          <p className="choice previous">{state.choices[i - 6]}</p>
        )}
        {state.choices[i - 5] && (
          <p className="choice previous">{state.choices[i - 5]}</p>
        )}
        {state.choices[i - 4] && (
          <p className="choice previous">{state.choices[i - 4]}</p>
        )}
        {state.choices[i - 3] && (
          <p className="choice previous">{state.choices[i - 3]}</p>
        )}
        {state.choices[i - 2] && (
          <p className="choice previous">{state.choices[i - 2]}</p>
        )}
        {state.choices[i - 1] && (
          <p className="choice previous">{state.choices[i - 1]}</p>
        )}
      </>
    )
    // return <p className="choice previous">{previousArray}</p>
  }

  if (!state.currentQuestion.options) {
    // console.group()
    // console.log('previousChoice: ')
    // console.log(state.previousChoices)
    // console.log('currentQuestion')
    // console.log(state.currentQuestion)
    // console.log('choices')
    // console.log(state.choices)
    // console.groupEnd()

    return (
      <div>
        {/* {Object.keys(state.choices).map((question) => (
          <>
            <p key={question} className="tool-response">
              {state.choices[question] && <p>{state.choices[question]}</p>}
            </p>

            <p className="choice current">
              current: {state.currentQuestion.question}
            </p>
          </>
        ))} */}

        {/* LEADING QUESTION */}
        <ShowHeader />

        {/* PREVIOUS CHOICES */}
        <PreviousChoices />

        {/* CURRENT CHOICE */}
        <p className="choice current">
          {state.choices[state.choices.length - 1]}:
        </p>

        {state.currentQuestion.result.organization && (
          <p className="organization">
            {state.currentQuestion.result.organization}
          </p>
        )}
        {state.currentQuestion.result.description && (
          <p className="organization description">
            {state.currentQuestion.result.description}
          </p>
        )}

        {state.currentQuestion.result.online[0] && (
          <p className="contact-item web">
            <a href={state.currentQuestion.result.online[1]}>
              {state.currentQuestion.result.online[0]}
            </a>
          </p>
        )}

        {state.currentQuestion.result.email && (
          <p className="contact-item email">
            <a href={'mailto:' + state.currentQuestion.result.email}>
              {state.currentQuestion.result.email}
            </a>
          </p>
        )}

        {state.currentQuestion.result.phone && (
          <p className="contact-item telephone">
            <a href={'tel:' + state.currentQuestion.result.phone}>
              {state.currentQuestion.result.phone}
            </a>
          </p>
        )}

        {/* REFACTOR */}
        <hr className="final-divider" />

        <p className="closeButton" onClick={clearState}>
          Restart
        </p>
      </div>
    )
  }

  // console.group()
  // console.log('currentQuestion')
  // console.log(state.currentQuestion)
  // console.log('choices')
  // console.log(state.choices)
  // console.groupEnd()

  // ! PREVIOUS previousItems from below
  // {
  //   Object.keys(state.choices).map((items) => {
  //     console.group()
  //     console.log('state.choices')
  //     console.log(state.choices)
  //     console.log(typeof state.choices)
  //     console.groupEnd()
  //     return (
  //       <>
  //         {/* <p>prev: {state.previousChoice}</p> */}
  //         {/* <p className="choice previous">
  //       <em>currentQuestion.question</em> map goes here:{' '}
  //       {state.currentQuestion.question}
  //     </p> */}
  //         <p key={items} className="choice current">
  //           {/* {question}: */}
  //           {/* state.choices: {state.choices[question]} */}
  //           FOO state.choices:{' '}
  //           {state.choices[state.choices.length - 1]}
  //         </p>
  //       </>
  //     )
  //   })
  // }

  return (
    <div>
      {/* LEADING QUESTION */}
      <ShowHeader />

      {/* PREVIOUS CHOICES */}
      <PreviousChoices />

      {/* CURRENT CHOICE */}
      {state.choices[state.choices.length - 1] && (
        <p className="choice current">
          {state.choices[state.choices.length - 1]}
        </p>
      )}

      <p className="tool-question select">
        <em>Select one</em>
        <img src={arrow} className="tool-question-arrow" alt="" />
      </p>
      {/* <p>previousChoice: {state.previousChoice}</p> */}
      {/* <p>state-question: {state.currentQuestion.question}</p> */}
      <section>
        {Object.keys(state.currentQuestion.options).map((option) => {
          // console.log(option)
          return (
            <p key={option} className="tool-response">
              <span onClick={() => handleChoice(option)}>{option}</span>
            </p>
          )
        })}
      </section>
      <p className="closeButton" onClick={clearState}>
        Restart
      </p>
    </div>
  )
}
