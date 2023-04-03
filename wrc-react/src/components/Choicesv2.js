import React, { useState } from 'react'

let arrow =
  'https://images.squarespace-cdn.com/content/6356d348273dcd0e61254e5c/56ceef9e-84fc-4f75-9be3-043c77826a0b/chevron%404x.png?content-type=image%2Fpng'

const decisionTree = {
  options: {
    // 'Help me make sense of what happened.': {
    //   options: {
    //     'I’d like to connect with someone to help me make sense of what happened.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         "Contact the Workers' Resource Centre": {
    //           result: {
    //             organization: "Workers' Resource Centre",
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: [null, null],
    //             email: 'quinn@helpwrc.org',
    //             phone: '587-374-5326',
    //           },
    //         },
    //       },
    //     },
    //     'I’d like to review relevant information': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         'Contact the Alberta Civil Liberties Research Centre (ACLRC)': {
    //           result: {
    //             organization: 'Alberta Civil Liberties Research Centre (ACLRC)',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: ['aclrc.com', 'https://aclrc.com/video-resources'],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //       },
    //     },
    //     'I’d like to learn more about what sexual harassment is.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         'Contact the Association of Alberta Sexual Assault Services (AASAS)': {
    //           result: {
    //             organization:
    //               'Association of Alberta Sexual Assault Services (AASAS)',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: [
    //               'aasas.ca',
    //               'https://aasas.ca/about-sexual-violence/sexual-harassment/',
    //             ],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //       },
    //     },
    //     'I want to learn how my workplace can be more respectful.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         'Contact the Association of Alberta Sexual Assault Services (AASAS)': {
    //           result: {
    //             organization:
    //               'Association of Alberta Sexual Assault Services (AASAS)',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: ['Moments Matter', 'https://momentsmatter.info'],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    // 'Help me make sense of my employment rights.': {
    //   options: {
    //     'I’d like to connect with someone to help me make sense of my employment rights.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         "Contact the Workers' Resource Centre": {
    //           result: {
    //             organization: "Workers' Resource Centre",
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: [null, null],
    //             email: 'info@helpwrc.org',
    //             phone: '587-374-5326',
    //           },
    //         },
    //       },
    //     },
    //     'I’d like to review information about employment rights.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         'Contact the Centre for Public Legal Education': {
    //           result: {
    //             organization: 'Centre for Public Legal Education',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: ['cplea.ca', 'https://cplea.ca/work'],
    //             email: 'info@cplea.ca',
    //             phone: null,
    //           },
    //         },
    //       },
    //     },
    //     'Show me related law and legislation information.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         'Contact the Centre for Public Legal Education': {
    //           result: {
    //             organization: 'Centre for Public Legal Education',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: ['cplea.cas', 'https://cplea.ca/bullying-harassment/'],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //         'Contact the Association des juristes d’expression francaise de l’Alberta': {
    //           result: {
    //             organization:
    //               'Association des juristes d’expression francaise de l’Alberta',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: ['ajefa.ca', 'https://ajefa.ca/'],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //         'Contact the Alberta Civil Liberties Research Centre': {
    //           result: {
    //             organization: 'Alberta Civil Liberties Research Centre',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: [
    //               'clrc.com',
    //               'https://aclrc.com/sexual-harrasmt-in-workplace',
    //             ],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //       },
    //     },
    //     'I’d like to explore filing a human rights complaint.': {
    //       // question:
    //       // 'I’d like to connect with someone to help me make sense of what happened.',
    //       options: {
    //         'Contact the Workers’ Resource Centre': {
    //           result: {
    //             organization: "Workers' Resource Centre",
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: ['helpwrc.org', 'https://helpwrc.org'],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //         'Contact the Alberta Civil Liberties Research Centre (ACLRC)': {
    //           result: {
    //             organization: 'Alberta Civil Liberties Research Centre (ACLRC)',
    //             description:
    //               'organization blurb detail lorem ipsum dolor sit amet placeholder.',
    //             online: [
    //               'aclrc.com',
    //               'https://www.aclrc.com/sexual-harrasmt-in-workplace',
    //             ],
    //             email: null,
    //             phone: null,
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    'I may have experienced sexual harassment.': {
      options: {
        'Did it happen at work?': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            Yes: {
              options: {
                "I'd like to contact the Workers' Resource Centre": {
                  result: {
                    organization: "Workers' Resource Centre",
                    description:
                      'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                    online: [null, null],
                    // 'quinn@helpwrc.org?subject=Test email!&body=Email body content TBD.',
                    email: 'quinn@helpwrc.org',
                    emailSubject: 'Test email',
                    emailBody: 'Email body content TBD.',
                    phone: '587-374-5326',
                  },
                },
                'I want to know who I can tell.': {
                  result: {
                    organization: "Workers' Resource Centre",
                    description:
                      'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                    online: [null, null],
                    email: 'quinn@helpwrc.org',
                    emailSubject: 'Test email',
                    emailBody: 'Email body content TBD.',
                    phone: '587-374-5326',
                  },
                },
                'I want to chat with someone who believes me.': {
                  result: {
                    prefix: 'Call or text',
                    organization: "Alberta's One Line for Sexual Violence",
                    description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                    online: [null, null],
                    email: null,
                    phone: '1-866-403-8000',
                  },
                },
                'I am looking for court support.': {
                  result: {
                    prefix: 'Call or text',
                    organization: "Alberta's One Line for Sexual Violence",
                    description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                    online: [null, null],
                    email: null,
                    phone: '1-866-403-8000',
                  },
                },
              },
            },
            No: {
              result: {
                prefix: 'Call or text',
                organization: "Alberta's One Line for Sexual Violence",
                description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                online: [null, null],
                email: null,
                phone: '1-866-403-8000',
              },
            },
          },
        },
      },
    },
    'There may be sexual harassment happening at my work.': {
      options: {
        'Who can I tell?': {
          result: {
            organization: "Workers' Resource Centre",
            description:
              'organization blurb detail lorem ipsum dolor sit amet placeholder.',
            online: [null, null],
            email: 'quinn@helpwrc.org',
            emailSubject: 'Test email',
            emailBody: 'Email body content TBD.',
            phone: '587-374-5326',
          },
        },
        'I want to learn how my workplace can be safer': {
          result: {
            organization: "Workers' Resource Centre",
            description:
              'organization blurb detail lorem ipsum dolor sit amet placeholder.',
            online: [null, null],
            email: 'quinn@helpwrc.org',
            emailSubject: 'Test email',
            emailBody: 'Email body content TBD.',
            phone: '587-374-5326',
          },
        },
        'I am on the leadership team at my workplace': {
          result: {
            organization: "Workers' Resource Centre",
            description:
              'organization blurb detail lorem ipsum dolor sit amet placeholder.',
            online: [null, null],
            email: 'quinn@helpwrc.org',
            emailSubject: 'Test email',
            emailBody: 'Email body content TBD.',
            phone: '587-374-5326',
          },
        },
      },
    },
    'What is sexual harassment?': {
      options: {
        'I want online resources': {
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

            organization2: 'Centre for Public Legal Education',
            description2:
              'organization blurb detail lorem ipsum dolor sit amet placeholder.',
            online2: ['cplea.ca', 'https://www.cplea.ca/bullying-harassment/'],
            email2: null,
            phone2: null,
          },
        },
        'I want to book training for my workplace.': {
          result: {
            organization: 'Moments Matter',
            description:
              'Engagement strategies toward ending workplace sexual harassment .',
            online: [
              'momentsmatter.info',
              'https://momentsmatter.info/training',
            ],
            email: 'lorem-ipsum@momentsmatter.info',
            emailSubject: 'Test email',
            emailBody: 'Email body content TBD.',
            phone: null,
          },
        },
      },
    },
    'I am helping someone who experienced sexual harassment.': {
      options: {
        'Did it happen at work?': {
          // question:
          // 'I’d like to connect with someone to help me make sense of what happened.',
          options: {
            Yes: {
              options: {
                'I want to know more about what our options are.': {
                  result: {
                    organization: "Workers' Resource Centre",
                    description:
                      'organization blurb detail lorem ipsum dolor sit amet placeholder.',
                    online: [null, null],
                    email: 'quinn@helpwrc.org',
                    emailSubject: 'Test email',
                    emailBody: 'Email body content TBD.',
                    phone: '587-374-5326',
                  },
                },
                'I want to chat with someone who understands.': {
                  result: {
                    prefix: 'Call or text',
                    organization: "Alberta's One Line for Sexual Violence",
                    description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                    online: [null, null],
                    email: null,
                    phone: '1-866-403-8000',
                  },
                },
              },
            },
            No: {
              result: {
                prefix: 'Call or text',
                organization: "Alberta's One Line for Sexual Violence",
                description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                online: [null, null],
                email: null,
                phone: '1-866-403-8000',
              },
            },
          },
        },
      },
    },
    'Is sexual harassment illegal?': {
      options: {
        'Can I file a human rights complaint?': {
          result: {
            organization: "Workers' Resource Centre",
            description:
              'organization blurb detail lorem ipsum dolor sit amet placeholder.',
            online: [null, null],
            email: 'quinn@helpwrc.org',
            emailSubject: 'Test email',
            emailBody: 'Email body content TBD.',
            phone: '587-374-5326',
          },
        },
        'I would like more information.': {
          result: {
            organization: 'Centre for Public Legal Education',
            description:
              'organization blurb detail lorem ipsum dolor sit amet placeholder.',
            online: ['cplea.ca', 'https://www.cplea.ca/bullying-harassment/'],
            email: 'info@cplea.ca',
            emailSubject: 'Test email',
            emailBody: 'Email body content TBD.',
            phone: null,
          },
        },
      },
    },
    "Besoin d'aide en français en Alberta? Trouvez-nous ici.": {
      // options: {
      // 'I want online resources': {
      result: {
        organization:
          "Association des juristes d'expression française de l'Alberta",
        description:
          'organization blurb detail lorem ipsum dolor sit amet placeholder.',
        online: [null, null],
        email: 'question@infojuri.ca',
        phone: null,
        // },
        // },
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
    previousQuestion: null,
    showRestart: false,
  })

  const clearState = () => {
    setState(() => ({
      currentQuestion: decisionTree,
      previousQuestion: null,
      previousChoices: [],
      breadcrumbs: [],
      choices: [],
      showRestart: false,
    }))
  }

  const handleChoice = (option) => {
    console.group()
    console.log('handleChoice: option chosen —>', option)
    // console.log(option)
    console.log(state)
    console.groupEnd()

    setState((prevState) => ({
      currentQuestion: prevState.currentQuestion.options[option],
      previousChoices: option,
      previousQuestion: prevState,
      showRestart: true,
      // ! prev
      // choices: {
      //   ...prevState.choices,
      //   [prevState.currentQuestion.question]: option,
      // },
      // three: prevState.previousQuestion,
      // four: prevState.three,
      // five: prevState.four,
      // six: prevState.five,
      // seven: prevState.six,
      // eight: prevState.seven,
      // nine: prevState.eight,
      // ten: prevState.nine,
      // eleven: prevState.ten,
      // twelve: prevState.eleven,

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

    console.group()
    console.log('handleChoice: state')
    console.log(state)
    if (state.currentQuestion !== undefined || state.currentQuestion !== null) {
      console.log('handleChoice: state')
      console.log(state)
      console.log('handleChoice: currentQuestion')
      console.log(state.currentQuestion)
      console.log('handleChoice: previousQuestion.currentQuestion')
      {
        state.previousQuestion &&
          console.log(state.previousQuestion.currentQuestion)
      }
    }
    console.groupEnd()
  }

  const ShowHeader = () => {
    // console.group()
    // console.log('len: ')
    // console.log(state.choices.length)
    // console.groupEnd()

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
          <p className="pathway-header small-text" onClick={clearState}>
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
      // console.group()
      // console.log('previousArray')
      // console.log(previousArray)
      // console.groupEnd()

      // return <p className="choice previous highlight">{state.choices}</p>
      // var obj = data.messages[i]
      // ...
    }

    return (
      <>
        {state.choices[i - 12] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .choices,
                  }))
              }
            >
              {state.choices[i - 12]}
            </span>
          </p>
        )}
        {state.choices[i - 11] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 11]}
            </span>
          </p>
        )}
        {state.choices[i - 10] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 10]}
            </span>
          </p>
        )}
        {state.choices[i - 9] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .choices,
                  }))
              }
            >
              {state.choices[i - 9]}
            </span>
          </p>
        )}
        {state.choices[i - 8] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 8]}
            </span>
          </p>
        )}
        {state.choices[i - 7] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 7]}
            </span>
          </p>
        )}
        {state.choices[i - 6] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion
                        .choices,
                  }))
              }
            >
              {state.choices[i - 6]}
            </span>
          </p>
        )}
        {state.choices[i - 5] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 5]}
            </span>
          </p>
        )}
        {state.choices[i - 4] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 4]}
            </span>
          </p>
        )}
        {state.choices[i - 3] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .previousQuestion,
                    choices:
                      state.previousQuestion.previousQuestion.previousQuestion
                        .choices,
                  }))
              }
            >
              {state.choices[i - 3]}
            </span>
          </p>
        )}
        {state.choices[i - 2] && (
          <p className="choice previous">
            <span
              onClick={
                // () => console.log(state)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion:
                      state.previousQuestion.previousQuestion.currentQuestion,
                    previousQuestion:
                      state.previousQuestion.previousQuestion.previousQuestion,
                    choices: state.previousQuestion.previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 2]}
            </span>
          </p>
        )}
        {state.choices[i - 1] && (
          <p className="choice previous">
            {/* <span onClick={() => handleChoice(state.choices[i - 1])}> */}
            <span
              onClick={
                // () => console.log(state.previousQuestion)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion: state.previousQuestion.currentQuestion,
                    previousQuestion: state.previousQuestion.previousQuestion,
                    choices: state.previousQuestion.choices,
                  }))
              }
            >
              {state.choices[i - 1]}
            </span>
          </p>
        )}
      </>
    )
    // return <p className="choice previous">{previousArray}</p>
  }

  if (state.currentQuestion !== undefined || state.currentQuestion !== null) {
    if (state.currentQuestion !== undefined && !state.currentQuestion.options) {
      // console.log('NO OPTIONS')
      // console.log(state)
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
            {state.choices[state.choices.length - 1]}
          </p>
          {state.currentQuestion.result.organization && (
            <p className="organization">
              {state.currentQuestion.result.organization}
            </p>
          )}
          {state.currentQuestion.result.description && (
            // <p className="organization description">
            //   {state.currentQuestion.result.description}
            // </p>
            <p
              className="organization description"
              dangerouslySetInnerHTML={{
                __html: state.currentQuestion.result.description,
              }}
            />
          )}
          {state.currentQuestion.result.online[0] && (
            <p className="contact-item web">
              <a href={state.currentQuestion.result.online[1]}>
                {state.currentQuestion.result.online[0]}
              </a>
            </p>
          )}
          {/* 'quinn@helpwrc.org?subject=Test email!&body=Email body content TBD.', */}
          {/* email: 'quinn@helpwrc.org', */}
          {/* emailSubject: 'Test email', */}
          {/* emailBody: 'Email body content TBD.', */}
          {state.currentQuestion.result.email && (
            <p className="contact-item email">
              <a
                href={
                  'mailto:' +
                  state.currentQuestion.result.email +
                  '?subject=' +
                  state.currentQuestion.result.emailSubject +
                  '&body=' +
                  state.currentQuestion.result.emailBody
                }
              >
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
          {state.currentQuestion.result.organization2 &&
          state.currentQuestion.result.organization2 !== undefined ? (
            <p className="organization two">
              {state.currentQuestion.result.organization2}
            </p>
          ) : (
            <></>
          )}
          {state.currentQuestion.result.description2 &&
          state.currentQuestion.result.description2 !== undefined ? (
            <p
              className="organization description"
              dangerouslySetInnerHTML={{
                __html: state.currentQuestion.result.description2,
              }}
            />
          ) : (
            <></>
          )}
          {state.currentQuestion.result.online2 &&
          state.currentQuestion.result.online2 !== undefined ? (
            <p className="contact-item web">
              <a href={state.currentQuestion.result.online2[1]}>
                {state.currentQuestion.result.online2[0]}
              </a>
            </p>
          ) : (
            <></>
          )}
          {state.currentQuestion.result.email2 &&
          state.currentQuestion.result.email2 !== undefined ? (
            <p className="contact-item email">
              <a href={'mailto:' + state.currentQuestion.result.email2}>
                {state.currentQuestion.result.email2}
              </a>
            </p>
          ) : (
            <></>
          )}
          {state.currentQuestion.result.phone2 &&
          state.currentQuestion.result.phone2 !== null ? (
            <p className="contact-item telephone">
              <a href={'tel:' + state.currentQuestion.result.phone2}>
                {state.currentQuestion.result.phone2}
              </a>
            </p>
          ) : (
            <></>
          )}
          {/* REFACTOR */}
          <hr className="final-divider" />
          {/* {console.log('showRestart: ' + state.showRestart)} */}
          {state.showRestart === true ? (
            <p
              className="closeButton"
              onClick={
                // () => console.log(state.previousQuestion)
                () =>
                  setState((state) => ({
                    ...state,
                    currentQuestion: state.previousQuestion.currentQuestion,
                    previousQuestion: state.previousQuestion.previousQuestion,
                    choices: state.previousQuestion.choices,
                  }))
              }
            >
              Back
              {/* {state.choices[-1]} */}
            </p>
          ) : (
            <></>
          )}
          {state.showRestart === true ? (
            <p className="closeButton" onClick={clearState}>
              Restart
            </p>
          ) : (
            <></>
          )}
        </div>
      )
    }
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
          // console.log('inner option: ' + option)
          // console.log(state)
          return (
            <p key={option} className="tool-response">
              <span onClick={() => handleChoice(option)}>{option}</span>
            </p>
          )
        })}
      </section>
      {/* {console.log('showRestart: ' + state.showRestart)} */}
      {state.showRestart === true ? (
        <p
          className="closeButton"
          onClick={
            // () => console.log(state.previousQuestion)
            () =>
              setState((state) => ({
                ...state,
                currentQuestion: state.previousQuestion.currentQuestion,
                previousQuestion: state.previousQuestion.previousQuestion,
                choices: state.previousQuestion.choices,
              }))
          }
        >
          {/* {console.log(state)} */}
          {/* {state.choices[0]} */}
          Back
        </p>
      ) : (
        <></>
      )}
      {state.showRestart === true ? (
        <p className="closeButton" onClick={clearState}>
          Restart
        </p>
      ) : (
        <p className="closeButton empty" />
      )}
    </div>
  )
}
