import React, { useState } from 'react'

const decisionTree = {
  options: {
    'Help me make sense of what happened.': {
      options: {
        'I’d like to connect with someone to help me make sense of what happened.': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            "Workers' Resource Centre": {
              result: {
                organization: "Workers' Resource Centre",
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
            'Alberta Civil Liberties Research Centre (ACLRC)': {
              result: {
                organization: 'Alberta Civil Liberties Research Centre (ACLRC)',
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
            'Association of Alberta Sexual Assault Services (AASAS)': {
              result: {
                organization:
                  'Association of Alberta Sexual Assault Services (AASAS)',
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
            'Association of Alberta Sexual Assault Services (AASAS)': {
              result: {
                organization:
                  'Association of Alberta Sexual Assault Services (AASAS)',
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
            "Workers' Resource Centre": {
              result: {
                organization: "Workers' Resource Centre",
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
            'Centre for Public Legal Education': {
              result: {
                organization: 'Centre for Public Legal Education',
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
            'Centre for Public Legal Education': {
              result: {
                organization: 'Centre for Public Legal Education',
                online: ['cplea.cas', 'https://cplea.ca/bullying-harassment/'],
                email: null,
                phone: null,
              },
            },
            'Association des juristes d’expression francaise de l’Alberta': {
              result: {
                organization:
                  'Association des juristes d’expression francaise de l’Alberta',
                online: ['ajefa.ca', 'https://ajefa.ca/'],
                email: null,
                phone: null,
              },
            },
            'Alberta Civil Liberties Research Centre': {
              result: {
                organization: 'Alberta Civil Liberties Research Centre',
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
            'Workers’ Resource Centre': {
              result: {
                organization: "Workers' Resource Centre",
                online: ['helpwrc.org', 'https://helpwrc.org'],
                email: null,
                phone: null,
              },
            },
            'Alberta Civil Liberties Research Centre (ACLRC)': {
              result: {
                organization: 'Alberta Civil Liberties Research Centre (ACLRC)',
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
    previousChoice: null,
    choices: {},
  })

  const clearState = () => {
    setState(() => ({
      currentQuestion: decisionTree,
      previousChoice: null,
      choices: {},
    }))
  }

  const handleChoice = (option) => {
    setState((prevState) => ({
      currentQuestion: prevState.currentQuestion.options[option],
      previousChoice: option,
      choices: {
        ...prevState.choices,
        [prevState.currentQuestion.question]: option,
      },
    }))
  }

  if (!state.currentQuestion.options) {
    return (
      <div>
        {/* <h2>You chose:</h2> */}
        {/* <ul> */}
        {Object.keys(state.choices).map((question) => (
          <p key={question}>
            {/* <p>{question}</p> */}
            <p>{state.choices[question]}</p>
            {/* <p>{state.previousChoice}</p> */}
            {/* <p>{state.currentQuestion.question}</p> */}
          </p>
        ))}
        {/* </ul> */}
        {/* <p>{state.currentQuestion.result.organization}</p> */}
        <p className="web">
          <a href={state.currentQuestion.result.online[1]}>
            {state.currentQuestion.result.online[0]}
          </a>
        </p>
        <p className="email">
          <a href={'mailto:' + state.currentQuestion.result.email}>
            {state.currentQuestion.result.email}
          </a>
        </p>
        <p className="telephone">
          <a href={'tel:' + state.currentQuestion.result.phone}>
            {state.currentQuestion.result.phone}
          </a>
        </p>
      </div>
    )
  }

  return (
    <div>
      {Object.keys(state.choices).map((question) => (
        <p key={question}>
          {/* {question}: {state.choices[question]} */}
          {question}
        </p>
      ))}
      <p>{state.previousChoice}</p>
      <p>{state.currentQuestion.question}</p>
      <ul>
        {Object.keys(state.currentQuestion.options).map((option) => {
          console.log(option)
          return (
            <p key={option}>
              <span onClick={() => handleChoice(option)}>{option}</span>
            </p>
          )
        })}
      </ul>

      <p className="closeButton" onClick={clearState}>
        Restart
      </p>
    </div>
  )
}
