import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
// import { Helmet } from "react-helmet";

// OLD Survey Items
// import TestSurvey from './Survey'

let arrow =
  "https://images.squarespace-cdn.com/content/6356d348273dcd0e61254e5c/56ceef9e-84fc-4f75-9be3-043c77826a0b/chevron%404x.png?content-type=image%2Fpng";

const br = "%0D%0A";

const decisionTree = {
  options: {
    "I may have experienced sexual harassment": {
      options: {
        "It happened at work": {
          options: {
            "I want to know who I can tell": {
              result: {
                orgPre:
                  "Connect with a Sexual Harassment Legal Specialist from the ",
                organization: "Workers' Resource Centre",
                orgPost: null,

                orgGA4: "WRC",
                description:
                  "The WRC is an employment and human rights advocacy agency that provides casework support, public legal education, and support with workplace sexual harassment issues. We serve all of Alberta and our services are <em>free</em>.",
                onlineCTA: "Learn more about the",
                online: ["Workers' Resource Centre", "https://helpwrc.org"],
                // online: [null, null],
                // REFACTOR - change to email generic address
                // email: "contact@hereforhelp.ca",
                emailCTA: "Email a",
                emailCTAname: "Legal Specialist",
                email: "contact@hereforhelp.ca",
                emailSubject:
                  "#hereforhelp - Website inquiry: Sexual Harassment at work",
                emailBody: `Hi,${br}${br}I want to learn more about sexual harassment employment rights and if I can file a claim or complaint.`,
                phoneCTA: "Call or text",
                phone: "587-374-5326",
              },
            },
            "I want to connect with someone who believes me": {
              result: {
                prefix: "Call or text",
                orgPre: "Connect with someone who believes you with ",
                organization: "Alberta's One Line for Sexual Violence",
                orgPost: null,
                orgGA4: "OneLine",
                description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                onlineCTA: "Learn more about",
                online: ["Alberta's One Line", "https://aasas.ca/get-support/"],
                emailCTA: null,
                emailCTAname: null,
                email: null,
                phoneCTA: "Call or text",
                phone: "1-866-403-8000",
              },
            },
            "I am looking for support with court": {
              result: {
                prefix: "Call or text",
                orgPre: null,
                organization: "Alberta's One Line for Sexual Violence",
                orgPost: null,
                orgGA4: "OneLine",
                description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                onlineCTA: "Learn more about",
                online: ["Alberta's One Line", "https://aasas.ca/get-support/"],
                emailCTA: null,
                emailCTAname: null,
                email: null,
                phoneCTA: "Call or text",
                phone: "1-866-403-8000",
              },
            },
          },
        },
        "It didn't happen at work": {
          result: {
            prefix: "Call or text",
            orgPre: null,
            organization: "Alberta's One Line for Sexual Violence",
            orgPost: null,
            orgGA4: "OneLine",
            description: `<p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
            onlineCTA: "Learn more about",
            online: ["Alberta's One Line", "https://aasas.ca/get-support/"],
            emailCTA: null,
            emailCTAname: null,
            email: null,
            phoneCTA: "Call or text",
            phone: "1-866-403-8000",
          },
        },
      },
    },
    "There may be sexual harassment happening at my work": {
      options: {
        "Who can I tell?": {
          result: {
            orgPre:
              "Connect with a Sexual Harassment Legal Specialist from the ",
            organization: "Workers' Resource Centre",
            orgPost: null,
            orgGA4: "WRC",
            description:
              "The WRC is an employment and human rights advocacy agency that provides casework support, public legal education, and support with workplace sexual harassment issues. We serve all of Alberta and our services are <em>free</em>.",
            onlineCTA: "Learn more about the",
            online: ["Workers' Resource Centre", "https://helpwrc.org"],
            // online: [null, null],
            // REFACTOR - change to email generic address
            // email: "contact@hereforhelp.ca",
            emailCTA: "Email a",
            emailCTAname: "Legal Specialist",
            email: "contact@hereforhelp.ca",
            emailSubject:
              "#hereforhelp - Website inquiry: Sexual Harassment at work",
            emailBody: `Hi,${br}${br}I want to learn more about sexual harassment employment rights and if I can file a claim or complaint.`,
            phoneCTA: "Call or text",
            phone: "587-374-5326",
          },
        },
        "I want to learn how my workplace can be safer": {
          result: {
            orgPre: "Learn about ",
            organization: "#momentsmatter",
            orgPost: ", an anti-harassment campaign and training program",
            orgGA4: "MomentsMatter",
            // description:
            // "Positive, respectful work cultures boost personal well-being, team success, and job performance. They also stop sexual harassment.",
            description:
              "At work, little moments make a big difference. Positive, respectful work cultures boost personal well-being, team success, and job performance. They also stop sexual harassment.<br /><br />Join the campaign and/or learn about engagement strategies toward ending workplace sexual harassment.",
            onlineCTA: "Learn more about",
            online: ["#momentsmatter", "https://momentsmatter.info/"],
            emailCTA: `Email`,
            emailCTAname: "#momentsmatter",
            email: "momentsmatterab@aasas.ca",
            emailSubject:
              "#hereforhelp - Website inquiry: I want to learn how my workplace can be safer",
            emailBody: `Hi,${br}${br}I want to learn more about how my workplace can be safer when it comes to sexual harassment.`,
            phoneCTA: "Call",
            phone: "403-300-0205 ext. 209",
          },
        },
        "I am on the leadership team at my workplace": {
          result: {
            orgPre: "Learn about ",
            organization: "#momentsmatter",
            orgPost: ", an anti-harassment campaign and training program",
            orgGA4: "MomentsMatter",
            // description:
            //   "Positive, respectful work cultures boost personal well-being, team success, and job performance. They also stop sexual harassment.",
            description:
              "Most people understand that workplace culture is the key to team success, job performance, and employee health and safety. But a positive culture is also an important defence against sexual harassment. Building and growing positive work cultures is easier than you might think.",
            emailCTA: `Email`,
            emailCTAname: "#momentsmatter",
            email: "momentsmatterab@aasas.ca",
            emailSubject:
              "#hereforhelp - Website inquiry: I want to learn how my workplace can be safer",
            emailBody: `Hi,${br}${br}I am on the leadership team at my workplace, and I want to learn how to make my workplace safe from sexual harassment.`,
            onlineCTA: "Learn more about",
            online: ["#momentsmatter", "https://momentsmatter.info/"],
            phoneCTA: "Call",
            phone: "403-300-0205 ext. 209",
          },
        },
      },
    },
    "What is sexual harassment?": {
      options: {
        "I want online resources": {
          result: {
            orgPre: "Learn about sexual harassment from the ",
            organization: "Alberta Civil Liberties Research Centre (ACLRC)",
            orgPost: null,
            orgGA4: "ACLRC",
            description: `The ACLRC’s mission is to promote respect for civil liberties and human rights in Alberta through research and education to contribute to a more just and inclusive community. Explore their suite of short videos about sexual harassment and related considerations by clicking on the link below.`,
            onlineCTA: "Learn about sexual harassment from the",
            online: [
              "Alberta Civil Liberties Research Centre",
              "https://www.aclrc.com/sexual-harrasmt-in-workplace",
            ],
            emailCTA: null,
            emailCTAname: null,
            email: null,
            phoneCTA: null,
            phone: null,

            orgPre2: "Learn about sexual harassment from the ",
            orgPost2: null,
            organization2: "Centre for Public Legal Education",
            orgGA42: "CPLEA",
            description2:
              "CPLEA creates resources that help people understand their rights and obligations under the law. They strive to improve both access to justice and the quality of justice available to Albertans. They share free legal information on a variety of topics that impact Albertans via workshops, articles, websites, FAQs, info sheets, and more.",
            online2CTA: "Learn about sexual harassment from the",
            online2: [
              "Centre for Public Legal Education",
              "https://www.cplea.ca/bullying-harassment/",
            ],
            email2CTA: null,
            email2CTAname: null,
            email2: null,
            phone2CTA: null,
            phone2: null,
          },
        },
        "I would like to book anti-harassment training for my workplace": {
          result: {
            orgPre: "Learn about ",
            organization: "#momentsmatter",
            orgPost: ", an anti-harassment campaign and training program",
            orgGA4: "MomentsMatter",
            // description:
            //   "Our unique curriculum is built with best practices for adult online learning and is proven to build the skills that help people understand, respond to, and prevent sexual harassment.",
            description:
              "Workplace culture is the key to team success, job performance, and employee health and safety. Positive, respectful work cultures boost personal well-being, team success, and job performance. But a positive culture is also an important defence against sexual harassment. Learn about engagement strategies toward ending workplace sexual harassment with #MomentsMatter.",
            onlineCTA: "Learn more about",
            online: [
              // "aasas.ca",
              "#momentsmatter",
              "https://aasas.ca/training/engagement-strategies-toward-ending-workplace-sexual-harassment/",
            ],
            emailCTA: `Email`,
            emailCTAname: "#momentsmatter",
            email: "momentsmatterab@aasas.ca",
            emailSubject:
              "#hereforhelp - Website inquiry: Engagement strategies toward ending workplace sexual harassment.",
            emailBody: `Hi,${br}${br}I want to learn more about the training you offer.`,
            phoneCTA: "Call",
            phone: "403-300-0205 ext. 209",
          },
        },
      },
    },
    "I am helping someone who experienced sexual harassment": {
      options: {
        "It happened at work": {
          options: {
            "I want to know more about what our options are": {
              result: {
                orgPre:
                  "Connect with a Sexual Harassment Legal Specialist from the ",
                organization: "Workers' Resource Centre",
                orgPost: null,
                orgGA4: "WRC",
                description:
                  "The WRC is an employment and human rights advocacy agency that provides casework support, public legal education, and support with workplace sexual harassment issues. We serve all of Alberta and our services are <em>free</em>.",
                onlineCTA: "Learn more about the",
                online: ["Workers' Resource Centre", "https://helpwrc.org"],
                // online: [null, null],
                // REFACTOR - change to email generic address
                // email: "contact@hereforhelp.ca",
                emailCTA: "Email a",
                emailCTAname: "Legal Specialist",
                email: "contact@hereforhelp.ca",
                emailSubject:
                  "#hereforhelp - Website inquiry: Sexual harassment at work",
                emailBody: `Hi,${br}${br}I want to learn more about sexual harassment employment rights and if I can file a claim or complaint.`,
                phoneCTA: "Call or text",
                phone: "587-374-5326",
              },
            },
            "I want to connect with someone who understands": {
              result: {
                prefix: "Call or text",
                orgPre: "Connect with someone who understands with ",
                organization: "Alberta's One Line for Sexual Violence",
                orgPost: null,
                orgGA4: "OneLine",
                description: `
                  <p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
                  <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
                  <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
                // https://aasas.ca/get-support/
                onlineCTA: "Learn more about",
                online: ["Alberta's One Line", "https://aasas.ca/get-support/"],
                emailCTA: null,
                emailCTAname: null,
                email: null,
                phoneCTA: "Call or text",
                phone: "1-866-403-8000",
              },
            },
          },
        },
        "It didn't happen at work": {
          result: {
            prefix: "Call or text",
            orgPre: "Connect with someone who can help with ",
            organization: "Alberta's One Line for Sexual Violence",
            orgPost: null,
            orgGA4: "OneLine",
            description: `
              <p>Sexual harassment isn’t just done by people at work. To connect with someone who understands and can help, reach out to Alberta’s One Line for Sexual Violence.</p>
              <p>Alberta’s One Line for Sexual Violence is a toll-free talk, text, and chat service that provides emotional support, information, and referral to anyone who has experienced or been impacted by sexual violence.</p>
              <p>One Line can provide support in the moment while also connecting Albertans to the nearest sexual assault centre for access to specialized services for individuals, families and communities across the province.</p>
              <p>Support is available seven days a week, with access to interpretation services in over 200 languages.</p>`,
            onlineCTA: "Learn more about",
            online: ["Alberta's One Line", "https://aasas.ca/get-support/"],
            emailCTA: null,
            emailCTAname: null,
            email: null,
            phoneCTA: "Call or text",
            phone: "1-866-403-8000",
          },
        },
      },
    },
    "I’d like legal information about sexual harassment": {
      options: {
        "Can I file a human rights complaint?": {
          result: {
            orgPre:
              "Connect with a Sexual Harassment Legal Specialist from the ",
            organization: "Workers' Resource Centre",
            orgPost: null,
            orgGA4: "WRC",
            description: `
              <p>Reach out to a Legal Specialist from the Workers’ Resource Centre to learn about human rights complaints.</p>
              <p>The WRC is an employment and human rights advocacy agency that provides casework support, public legal education, and support with workplace sexual harassment issues. We serve all of Alberta and our services are <em>free</em>.</p>`,
            onlineCTA: "Learn more about the",
            online: ["Workers' Resource Centre", "https://helpwrc.org"],
            // online: [null, null],
            // REFACTOR - change to email generic address
            // email: "contact@hereforhelp.ca",
            emailCTA: "Email a",
            emailCTAname: "Legal Specialist",
            email: "contact@hereforhelp.ca",
            emailSubject:
              "#hereforhelp - Website inquiry: I’d like legal information about sexual harassment.",
            emailBody: `Hi,${br}${br}I want to learn more about sexual harassment employment rights and if I can file a claim or complaint.`,
            phoneCTA: "Call or text",
            phone: "587-374-5326",
          },
        },
        "I would like more information about sexual harassment and the law": {
          result: {
            orgPre: "Learn about sexual harassment from the ",
            organization: "Centre for Public Legal Education",
            orgPost: null,
            description:
              "CPLEA creates resources that help people understand their rights and obligations under the law. They strive to improve both access to justice and the quality of justice available to Albertans. They share free legal information on a variety of topics that impact Albertans via workshops, articles, websites, FAQs, info sheets, and more.",
            // organization: "Centre for Public Legal Education",
            orgGA4: "CPLEA",
            // description:
            //   "Find more information about sexual harassment and the law by clicking the link below.",
            onlineCTA: "Learn about sexual harassment from the",
            online: ["cplea.ca", "https://www.cplea.ca/bullying-harassment/"],
            emailCTA: null,
            emailCTAname: null,
            email: null,
            emailSubject: null,
            emailBody: null,
            phoneCTA: null,
            phone: null,
          },
        },
      },
    },
    "AJEFA offre des ressources en français": {
      // options: {
      // 'I want online resources': {
      result: {
        organization:
          "Association des juristes d'expression française de l'Alberta",
        orgGA4: "AJEFA",
        description: `Situé à La Cité francophone d'Edmonton et à Guinness House à Calgary, l'AJEFA et son centre d'information juridique assure des services gratuits et confidentiels d'information juridique, d'orientation et d'accompagnement aux personnes faisant face à un problème d'ordre juridique.`,
        onlineCTA: "Trouvez des ressources en ligne sur",
        online: [
          "Association des juristes d'expression française de l'Alberta",
          "https://infojuri.ca/fr/",
        ],
        email:
          // Question%20sur%20le%20harc%C3%A8lement%20sexuel&body=
          "question@infojuri.ca",
        emailCTA: `Envoyer un e-mail à un`,
        emailCTAname: `spécialiste juridique`,
        emailSubject: "Besoin d'information",
        emailBody: `Bonjour,${br}${br}Je cherche des ressources en français`,
        phoneCTA: null,
        phone: null,
        // },
        // },
      },
    },
  },
};

export const DecisionTree = () => {
  const [state, setState] = useState({
    currentQuestion: decisionTree,
    // previousChoices: [null],
    // breadcrumbs: [null],
    choices: [],
    previousQuestion: null,
    showRestart: false,
    hasBegun: false,
    hasShownSurvey: false,
  });

  // survey show/hide
  // const [isHide, setIsHide] = useState(true)
  // const [isHide, setIsHide] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [height, setHeight] = useState("auto");

  const showSurvey = () => {
    console.log("choicesv2.js show survey");
    console.log("survey state:", state.hasShownSurvey);

    // note: dev test
    // setIsHide(false)

    // note: prod
    // if (state.hasShownSurvey !== true) {
    //   setTimeout(() => setIsHide(false), 2000)
    //   console.log('show survey')

    //   setState((state) => ({
    //     ...state,
    //     hasShownSurvey: true,
    //   }))
    // }

    // You can find the form ID in the URL of this page
    // https://tally.so/forms/meD6Wo/share
    // const formId = 'meD6Wo'

    // Open the popup
    // Tally.openPopup(formId, options)

    // Available options
    // type PopupOptions = {
    //   key?: string,
    //   layout?: 'default' | 'modal',
    //   width?: number,
    //   alignLeft?: boolean,
    //   hideTitle?: boolean,
    //   overlay?: boolean,
    //   emoji?: {
    //     text: string,
    //     animation:
    //       | 'none'
    //       | 'wave'
    //       | 'tada'
    //       | 'heart-beat'
    //       | 'spin'
    //       | 'flash'
    //       | 'bounce'
    //       | 'rubber-band'
    //       | 'head-shake',
    //   },
    //   autoClose?: number,
    //   showOnce?: boolean,
    //   doNotShowAfterSubmit?: boolean,
    //   customFormUrl?: string,
    //   hiddenFields?: {
    //     [key: string]: any,
    //   },
    //   onOpen?: () => void,
    //   onClose?: () => void,
    //   onPageView?: (page: number) => void,
    //   onSubmit?: (payload: any) => void,
    // }

    // Example: open a popup with default options
    // Tally.openPopup('meD6Wo')

    // Example: opening a popup as a centered modal
    // Tally.openPopup('meD6Wo', {
    //   layout: 'modal', // Open as a centered modal
    //   width: 700, // Set the width of the modal
    //   autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
    // })

    // Example: set custom hidden fields
    // Tally.openPopup('meD6Wo', {
    //   hiddenFields: {
    //     ref: 'downloads',
    //     email: 'alice@example.com',
    //   },
    // })

    // Example: customization via custom domain URL + code injection
    // Tally.openPopup('meD6Wo', {
    //   customFormUrl: 'https://yourdomain.com/form',
    // })

    // Example: use callback functions to handle events
    // Tally.openPopup('meD6Wo', {
    //   onOpen: () => {
    //     // The popup was opened, mark the form as seen
    //     // ...
    //   },
    //   onClose: () => {
    //     // The popup was closed
    //     // ...
    //   },
    //   onPageView: (page: number) => {
    //     // Log the page view
    //     // ...
    //   },
    //   onSubmit: (payload: any) => {
    //     // Form was submitted, use the answers payload in your application
    //     // ...
    //   },
    // })

    // Close the popup
    // Tally.closePopup('meD6Wo')
  };

  const clearState = () => {
    setState(() => ({
      currentQuestion: decisionTree,
      previousQuestion: null,
      previousChoices: [],
      breadcrumbs: [],
      choices: [],
      showRestart: false,
      hasBegun: false,
    }));
  };

  const handleBegin = () => {
    // setHeight(height === 0 ? 'auto' : 0)
    // setHeight('auto')

    showSurvey();

    setState((state) => ({
      ...state,
      hasBegun: true,
    }));
  };

  const handleChoice = (option) => {
    console.group();
    console.log("handleChoice: option chosen —>", option);
    // console.log(option)
    console.log(state);
    console.groupEnd();
    // setHeight(height === 0 ? 'auto' : 0)

    setState((prevState) => ({
      currentQuestion: prevState.currentQuestion.options[option],
      previousChoices: option,
      previousQuestion: prevState,
      hasBegun: true,
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
    }));

    console.group();
    console.log("handleChoice: state");
    console.log(state);
    if (state.currentQuestion !== undefined || state.currentQuestion !== null) {
      console.log("handleChoice: state");
      console.log(state);
      console.log("handleChoice: currentQuestion");
      console.log(state.currentQuestion);
      console.log("handleChoice: previousQuestion.currentQuestion");
      // eslint-disable-next-line no-lone-blocks
      {
        state.previousQuestion &&
          console.log(state.previousQuestion.currentQuestion);
      }
    }
    console.groupEnd();
  };

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
      );
    } else {
      return (
        <>
          {/* LEAD QUESTION */}
          {/* <p className="pathway-header small-text" onClick={clearState}>
            The climate, culture, and/or conduct in my workplace is concerning
            and I want help.
          </p> */}
        </>
      );
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
  };

  // eslint-disable-next-line no-unused-vars
  const PreviousChoices = () => {
    var previousArray = [];

    for (var i = 0, l = state.choices.length; i < l - 1; i++) {
      // console.group()
      // console.log('previousItems')
      // console.log(state.choices[i - 1])
      // console.groupEnd()

      previousArray.push(state.choices[i - 1]);
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
        {/* {!isHide ? <TestSurvey /> : null} */}
        {/* <TestSurvey /> */}

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
    );
    // return <p className="choice previous">{previousArray}</p>
  };

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
          {/* <PreviousChoices /> */}
          {/* CURRENT CHOICE */}
          <p className="choice current">
            {state.choices[state.choices.length - 1]}
          </p>
          {state.currentQuestion.result.organization && (
            <p className="organization">
              {state.currentQuestion.result.orgPre && (
                <>{state.currentQuestion.result.orgPre}</>
              )}

              {state.currentQuestion.result.organization}

              {state.currentQuestion.result.orgPost && (
                <>{state.currentQuestion.result.orgPost}</>
              )}
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
            // <p className="contact-item web">
            <p
              className={
                "contact-item web" + state.currentQuestion.result.orgGA4
              }
            >
              {state.currentQuestion.result.onlineCTA && (
                <>
                  {" "}
                  <span className="exitCTA">
                    {state.currentQuestion.result.onlineCTA}
                  </span>{" "}
                </>
              )}
              <a
                data-exitType="online"
                href={state.currentQuestion.result.online[1]}
              >
                {state.currentQuestion.result.online[0]}
              </a>
            </p>
          )}
          {/* 'contact@hereforhelp.ca?subject=Test email!&body=Email body content TBD.', */}
          {/* email: 'contact@hereforhelp.ca', */}
          {/* emailSubject: 'Test email', */}
          {/* emailBody: 'Email body content TBD.', */}
          {state.currentQuestion.result.email && (
            // <p className="contact-item email">
            <p
              className={
                "contact-item email" + state.currentQuestion.result.orgGA4
              }
            >
              {state.currentQuestion.result.emailCTA && (
                <>
                  {" "}
                  <span className="exitCTA">
                    {state.currentQuestion.result.emailCTA}
                  </span>{" "}
                </>
              )}
              <a
                data-exitType="email"
                href={
                  "mailto:" +
                  state.currentQuestion.result.email +
                  "?subject=" +
                  state.currentQuestion.result.emailSubject +
                  "&body=" +
                  state.currentQuestion.result.emailBody
                }
              >
                {state.currentQuestion.result.emailCTAname}
              </a>
            </p>
          )}
          {state.currentQuestion.result.phone && (
            // <p className="contact-item telephone">
            <p
              className={
                "contact-item telephone" + state.currentQuestion.result.orgGA4
              }
            >
              {state.currentQuestion.result.phoneCTA && (
                <>
                  {" "}
                  <span className="exitCTA">
                    {state.currentQuestion.result.phoneCTA}
                  </span>{" "}
                </>
              )}
              <a
                data-exitType="phone"
                href={"tel:" + state.currentQuestion.result.phone}
              >
                {state.currentQuestion.result.phone}
              </a>
            </p>
          )}
          {state.currentQuestion.result.organization2 &&
          state.currentQuestion.result.organization2 !== undefined ? (
            <p className="organization two">
              {state.currentQuestion.result.orgPre2 && (
                <>{state.currentQuestion.result.orgPre2}</>
              )}

              {state.currentQuestion.result.organization2}

              {state.currentQuestion.result.orgPost2 && (
                <>{state.currentQuestion.result.orgPost2}</>
              )}
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
            // <p className="contact-item web">
            <p
              className={
                "contact-item web" + state.currentQuestion.result.orgGA4
              }
            >
              {state.currentQuestion.result.online2CTA && (
                <>
                  {" "}
                  <span className="exitCTA">
                    {state.currentQuestion.result.online2CTA}
                  </span>{" "}
                </>
              )}
              <a
                data-exitType="online"
                href={state.currentQuestion.result.online2[1]}
              >
                {state.currentQuestion.result.online2[0]}
              </a>
            </p>
          ) : (
            <></>
          )}
          {state.currentQuestion.result.email2 &&
          state.currentQuestion.result.email2 !== undefined ? (
            // <p className="contact-item email">
            <p
              className={
                "contact-item email" + state.currentQuestion.result.orgGA4
              }
            >
              {state.currentQuestion.result.email2CTA && (
                <>
                  {" "}
                  <span className="exitCTA">
                    {state.currentQuestion.result.email2CTA}
                  </span>{" "}
                </>
              )}
              <a href={"mailto:" + state.currentQuestion.result.email2}>
                {state.currentQuestion.result.email2}
              </a>
            </p>
          ) : (
            <></>
          )}
          {state.currentQuestion.result.phone2 &&
          state.currentQuestion.result.phone2 !== null ? (
            // <p className="contact-item telephone">
            <p
              className={
                "contact-item telephone" + state.currentQuestion.result.orgGA4
              }
            >
              {state.currentQuestion.result.phone2CTA && (
                <>
                  {" "}
                  <span className="exitCTA">
                    {state.currentQuestion.result.phone2CTA}
                  </span>{" "}
                </>
              )}
              <a href={"tel:" + state.currentQuestion.result.phone2}>
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
                    hasBegun: state.previousQuestion.hasBegun,
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
      );
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
      {/* <Helmet>
        <title>My Title</title>
        <script src="https://tally.so/widgets/embed.js"></script>
      </Helmet> */}

      {/* LEADING QUESTION */}
      <ShowHeader />
      {/* PREVIOUS CHOICES */}
      {/* <PreviousChoices /> */}
      {/* CURRENT CHOICE */}
      {state.choices[state.choices.length - 1] && (
        <p className="choice current">
          {state.choices[state.choices.length - 1]}
        </p>
      )}

      {/* {state.hasBegun === true ? showSurvey() : <></>} */}

      {state.hasBegun === false ? (
        <p
          className="closeButton"
          onClick={
            // () => console.log(state.previousQuestion)
            () => {
              setState((state) => ({
                ...state,
                hasBegun: true,
              }));
              console.log("choices: handleBegin and showSurvey");
              handleBegin();
              showSurvey();
              // setIsHide(false)
            }
          }
        >
          {/* {console.log(state)} */}
          {/* {state.choices[0]} */}
          Begin
        </p>
      ) : (
        <>
          <p className="tool-question select">
            <em>Select one</em>
            <img src={arrow} className="tool-question-arrow" alt="" />
          </p>
          {/* <p>previousChoice: {state.previousChoice}</p> */}
          {/* <p>state-question: {state.currentQuestion.question}</p> */}

          <AnimateHeight
            id="options-section"
            duration={300}
            delay={50}
            height={height}
          >
            <section id="options-container">
              {Object.keys(state.currentQuestion.options).map((option) => {
                // console.log('inner option: ' + option)
                // console.log(state)
                return (
                  <p key={option} className="tool-response">
                    <span onClick={() => handleChoice(option)}>{option}</span>
                  </p>
                );
              })}
            </section>
          </AnimateHeight>
          {/* {console.log('showRestart: ' + state.showRestart)} */}
          {state.showRestart === true && state.previousQuestion !== null ? (
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
                    hasBegun: state.previousQuestion.hasBegun,
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
          {state.showRestart === true && state.previousQuestion !== null ? (
            <p className="closeButton" onClick={clearState}>
              Restart
            </p>
          ) : (
            <p className="closeButton empty" />
          )}
        </>
      )}
    </div>
  );
};
