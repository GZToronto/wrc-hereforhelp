// import { useCallback } from 'react'

// // Modern theme
// // import 'survey-core/modern.min.css';
// import './SurveyModern.css'
// import './Survey.css'
// import { Model } from 'survey-core'
// // import { Survey } from 'survey-react-ui'
// import { PopupSurvey } from 'survey-react-ui'

// // const SURVEY_ID = 1;

// // const surveyJson = {
// //   elements: [
// //     {
// //       name: 'FirstName',
// //       title: 'Enter your first name:',
// //       type: 'text',
// //     },
// //     {
// //       name: 'LastName',
// //       title: 'Enter your last name:',
// //       type: 'text',
// //     },
// //   ],
// // }

// export const json = {
//   title: 'Site feedback',
//   // logo:
//   //   'https://api.surveyjs.io/private/Surveys/files?name=bdf16c7e-fa1e-4e31-9d82-a6df1982c224',
//   // logoWidth: '200px',
//   // logoHeight: '80px',
//   // logoFit: 'cover',
//   // logoPosition: 'right',
//   completedHtmlOnCondition: [
//     {
//       expression: '{nps-score} <= 6 or {rebuy} = false',
//       html: {
//         default:
//           "Thanks for your feedback! We highly value all ideas and suggestions, whether they're positive or critical.",
//         fr:
//           "Merci pour vos commentaires! Nous apprécions énormément toutes les idées et suggestions, qu'elles soient positives ou critiques.",
//       },
//     },
//     {
//       expression: '{nps-score} = 6 or {nps-score} = 7',
//       html: {
//         default:
//           'Thanks for your feedback. Our goal is to create the most helpful resources, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.',
//         fr:
//           "Merci pour vos commentaires. Notre objectif est de créer les ressources les plus utiles et vos réflexions, idées et suggestions jouent un rôle majeur pour nous aider à identifier les opportunités d'amélioration.",
//       },
//     },
//     {
//       expression: '{nps-score} >= 8',
//       html: {
//         default:
//           'Your feedback helps us discover new opportunities to improve our resources.',
//         fr:
//           'Vos commentaires nous aident à découvrir de nouvelles opportunités pour améliorer nos ressources.',
//       },
//     },
//   ],
//   pages: [
//     {
//       name: 'page1',
//       elements: [
//         {
//           type: 'panel',
//           name: 'nps-panel',
//           elements: [
//             {
//               type: 'rating',
//               name: 'nps-score',
//               title: {
//                 default:
//                   'On a scale from 0 to 10 was this website easy to use?',
//                 fr:
//                   'Sur une échelle de 0 à 10, ce site Web était-il facile à utiliser ?',
//               },
//               rateMin: 0,
//               rateMax: 10,
//               minRateDescription: {
//                 default: 'Very difficult',
//                 fr: 'Très difficile',
//               },
//               maxRateDescription: {
//                 default: 'Very easy',
//                 fr: 'Très facile',
//               },
//             },
//             {
//               type: 'comment',
//               name: 'disappointing-experience',
//               visibleIf: '{nps-score} <= 5',
//               title: {
//                 default:
//                   'How did we disappoint you and what can we do to make things right?',
//                 fr:
//                   "Nous n'avons pas été a la hauteur de vos attentes, comment pouvons-nous améliorer?",
//               },
//               maxLength: 300,
//             },
//             {
//               type: 'comment',
//               name: 'improvements-required',
//               visibleIf: '{nps-score} >= 6',
//               title: {
//                 default:
//                   'What can we do to make your experience more satisfying?',
//                 fr:
//                   'Que pouvons-nous faire pour rendre votre expérience plus satisfaisante?',
//               },
//               maxLength: 300,
//             },
//             // {
//             //   type: 'checkbox',
//             //   name: 'promoter-features',
//             //   visibleIf: '{nps-score} >= 9',
//             //   title: {
//             //     default:
//             //       'Which of the following features do you value the most?',
//             //     fr:
//             //       'Laquelle des fonctionnalités suivantes appréciez-vous le plus ?',
//             //   },
//             //   description: {
//             //     default: 'Please select no more than three features.',
//             //     fr:
//             //       'Veuillez ne pas sélectionner plus de trois fonctionnalités.',
//             //   },
//             //   isRequired: true,
//             //   choices: [
//             //     {
//             //       value: 'performance',
//             //       text: 'Performance',
//             //     },
//             //     {
//             //       value: 'stability',
//             //       text: {
//             //         default: 'Stability',
//             //         fr: 'Stabilité',
//             //       },
//             //     },
//             //     {
//             //       value: 'ui',
//             //       text: {
//             //         default: 'User interface',
//             //         fr: 'Interface utilisateur',
//             //       },
//             //     },
//             //     {
//             //       value: 'complete-functionality',
//             //       text: {
//             //         default: 'Complete functionality',
//             //         fr: 'Ensemble des fonctionnalités',
//             //       },
//             //     },
//             //     {
//             //       value: 'learning-materials',
//             //       text: {
//             //         default:
//             //           'Learning materials (documentation, demos, code examples)',
//             //         fr:
//             //           "Matériel d'apprentissage (documentation, démos, exemples de code)",
//             //       },
//             //     },
//             //     {
//             //       value: 'support',
//             //       text: {
//             //         default: 'Quality support',
//             //         fr: 'Accompagnement de qualité',
//             //       },
//             //     },
//             //   ],
//             //   showOtherItem: true,
//             //   otherPlaceholder: {
//             //     default: 'Please specify...',
//             //     fr: 'Veuillez préciser...',
//             //   },
//             //   otherText: {
//             //     default: 'Other features',
//             //     fr: 'Autres fonctionnalités',
//             //   },
//             //   colCount: 2,
//             //   maxSelectedChoices: 3,
//             // },
//           ],
//         },
//         {
//           type: 'boolean',
//           name: 'easy-to-use',
//           title: {
//             default: 'Was this information easy to understand?',
//             fr: 'Ces informations étaient-elles faciles à comprendre',
//           },
//         },
//         {
//           type: 'boolean',
//           name: 'found-what-you-were-looking-for',
//           title: {
//             default:
//               'Did you find the information and resources you were looking for?',
//             fr:
//               'Avez-vous trouvé les informations et les ressources que vous recherchiez?',
//           },
//         },
//         {
//           type: 'boolean',
//           name: 'clear-what-to-do-next',
//           title: {
//             default: 'Did this information help you identify what to do next?',
//             fr:
//               'Ces informations vous ont-elles aidé à identifier ce que vous devez faire ensuite?',
//           },
//         },
//         // {
//         //   type: 'panel',
//         //   name: 'more-feedback',
//         //   elements: [
//         //     {
//         //       type: 'radiogroup',
//         //       name: 'would-you-like-to-provide-more-feedback',
//         //       title: {
//         //         default: 'Would you like to provide more feedback?',
//         //         fr: 'Souhaitez-vous fournir plus de commentaires?',
//         //       },
//         //       choices: [
//         //         {
//         //           value: 'yes',
//         //           text: {
//         //             default: 'Sure!',
//         //             fr: 'Bien sur!',
//         //           },
//         //         },
//         //         {
//         //           value: 'no',
//         //           text: {
//         //             default: 'No',
//         //             fr: 'Non merci.',
//         //           },
//         //         },
//         //       ],
//         //     },
//         //     {
//         //       type: 'text',
//         //       name: 'email',
//         //       visibleIf: "{testimonial} = 'yes'",
//         //       title: {
//         //         default: 'What is your email address?',
//         //         fr: 'Quelle est votre adresse e-mail?',
//         //       },
//         //       validators: [
//         //         {
//         //           type: 'email',
//         //         },
//         //       ],
//         //       placeholder: {
//         //         default: 'Enter your email here',
//         //         fr: 'Veuillez saisir votre adresse e-mail ici',
//         //       },
//         //     },
//         //   ],
//         // },
//       ],
//     },
//   ],
//   showPrevButton: false,
//   showQuestionNumbers: 'off',
//   completeText: {
//     fr: 'Envoyer',
//   },
//   questionsOnPageMode: 'questionPerPage',
//   widthMode: 'static',
//   width: '1000px',
// }

// const TestSurvey = (data) => {
//   // data = console.log(data)
//   // console.log()

//   // const survey = new Model(surveyJson)
//   const survey = new Model(json)
//   const alertResults = useCallback((sender) => {
//     const results = JSON.stringify(sender.data)
//     // alert(results)
//     console.log(results)
//     // saveSurveyResults(
//     //   "https://your-web-service.com/" + SURVEY_ID,
//     //   sender.data
//     // )
//   }, [])

//   survey.onComplete.add(alertResults)

//   return (
//     <section id="wrc-site-survey">
//       {/* <Survey model={survey} /> */}
//       <PopupSurvey model={survey} isExpanded={true} />
//     </section>
//   )
// }

// // function saveSurveyResults(url, json) {
// //   const request = new XMLHttpRequest();
// //   request.open('POST', url);
// //   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// //   request.addEventListener('load', () => {
// //     // Handle "load"
// //   });
// //   request.addEventListener('error', () => {
// //     // Handle "error"
// //   });
// //   request.send(JSON.stringify(json));
// // }

// export default TestSurvey
