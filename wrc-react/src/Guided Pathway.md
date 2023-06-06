# Guided Pathway

## Regex

var myHTML= "<div><h1>Jimbo.</h1>\n<p>That's what she said</p></div>";
var strippedHtml = myHTML.replace(/<[^>]+>/g, '');

// Jimbo.
// That's what she said
console.log(strippedHtml);

## Functional approach

function convertToPlain(html){

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || "";

}

var htmlString= "<div><h1>Bears Beets Battlestar Galactica </h1>\n<p>Quote by Dwight Schrute</p></div>";

console.log(convertToPlain(htmlString));
// Expected Result:
// Bears Beets Battlestar Galactica
// Quote by Dwight Schrute

## Help me make sense of what happened.

- I’d like to connect with someone to help me make sense of what happened.
  WRC
  587-374-5326
  contact@hereforhelp.ca

  ```
  {
    "question": 1,
    "options":
      [
        {
          "organization":"Workers' Resource Centre",
          "online": null,
          "by email":"contact@hereforhelp.ca",
          "by phone":"587-374-5326",
        }
      ]
  }
  ```

- I’d like to review relevant information
  https://www.aclrc.com/video-resources

  ```
  {
    "options":
      [
        {
        "organization":"Alberta Civil Liberties Research Centre (ACLRC)",
        "online": ["ACLRC Video Resources", "https://aclrc.com/video-resources"],
        "by email":null,
        "by phone":null,
        }
      ]
  }
  ```

- I’d like to learn more about what sexual harassment is
  https://aasas.ca/about-sexual-violence/sexual-harassment/

  ```
  {
  "options":
    [
      {
        "organization":"Association of Alberta Sexual Assault Services (AASAS)",
        "online": ["About Sexual Harassment", "https://aasas.ca/about-sexual-violence/sexual-harassment/"],
        "by email":null,
        "by phone":null,
      }
    ]
  }
  ```

- I want to learn how my workplace can be more respectful
  https://momentsmatter.info
  ```
  {
  "options":
    [
      {
        "organization":"Association of Alberta Sexual Assault Services (AASAS)",
        "online": ["Moments Matter", "https://momentsmatter.info"],
        "by email":null,
        "by phone":null,
      }
    ]
  }
  ```

## Help me make sense of my employment rights.

- I’d like to connect with someone to help me make sense of my employment rights
  WRC
  403-264-8100
  info@helpwrc.org

  ```
  {
  "options":
    [
      {
        "organization":"Workers' Resource Centre",
        "online":null,
        "by email":"info@helpwrc.org",
        "by phone":"403-264-8100"
      }
    ]
  }
  ```

- I’d like to review information about employment rights
  https://www.cplea.ca/work/
  Info@cplea.ca
  ```
  {
  "options":
  [
    {
      "organization":"Centre for Public Legal Education",
      "online": ["siteName", "https://cplea.ca/work"],
      "by email":"info@cplea.ca",
      "by phone":null,
    }
  ]
  }
  ```

## Show me related law and legislation information.

- I’d like to see legal information
  Website 1: https://scplea.ca/bullying-harassment/
  Website 2: https://ajefa.ca
  Website 3: https://aclrc.com/sexual-harrasmt-in-workplace

  ```
  {
    "options":
    [
      {
        "organization":"Centre for Public Legal Education",
        "online": ["cplea.cas", "https://cplea.ca/bullying-harassment/"],
        "by email":null,
        "by phone":null,
      },
      {
        "organization":"Association des juristes d’expression francaise de l’Alberta",
        "online": ["ajefa.ca", "https://ajefa.ca/"],
        "by email":null,
        "by phone":null,
      },
      {
        "organization":"Alberta Civil Liberties Research Centre",
        "online": ["clrc.com", "https://aclrc.com/sexual-harrasmt-in-workplace"],
        "by email":null,
        "by phone":null,
      }
    ]
  }
  ```

- I’d like to explore filing a human rights complaint
  Website 1: https://helpwrc.org
  Website 2: https://www.aclrc.com/sexual-harrasmt-in-workplace
  ```
  {
  "options":
  [
    {
      "organization":"Workers’ Resource Centre",
      "online": ["helpwrc.org", "https://helpwrc.org"],
      "by email":null,
      "by phone":null,
    },
    {
      "organization":"Alberta Civil Liberties Research Centre (ACLRC)",
      "online": ["aclrc.com", "https://www.aclrc.com/sexual-harrasmt-in-workplace"],
      "by email":null,
      "by phone":null,
    },
  ]
  }
  ```

## Help me understand my options and rights.

WRC Info

# Info for Resource Cards

## Sexual Harassment

- Workers Resource Centre
  P: 403-264-8100
  www.Helpwrc.org

- Associate of Alberta Sexual Assault Services
  The primary work of the Association of Alberta Sexual Assault Services is to provide leadership, coordination and collaboration of sexual assault services in Alberta. The AASAS member agencies and services are responsible for the day-to-day front-line delivery of services within their local communities and regional areas.
  P: 1-866-403-8000
  https://www.aasas.ca

- Moments Matter – AASAS Campaign
  Through simple, relatable stories, we’re showing Alberta leaders how easy it can be to strengthen and grow positive workplace cultures that help people feel safe and supported, help them grow and succeed – and help stop sexual harassment.
  https://momentsmatter.info

  ```
  {
  "options":
  [
    {
      "organization":"Workers’ Resource Centre",
      "description":"TBD"
      "contact": [
      "online": ["helpwrc.org", "https://helpwrc.org"],
      "by email":null,
      "by phone":"403-264-8100"
      ]
    },
    {
      "organization":"Associate of Alberta Sexual Assault Services",
      "description":"The primary work of the Association of Alberta Sexual Assault Services is to provide leadership, coordination and collaboration of sexual assault services in Alberta. The AASAS member agencies and services are responsible for the day-to-day front-line delivery of services within their local communities and regional areas."
      "contact": [
      "online": ["aasas.ca", "https://aasas.ca"],
      "by email":null,
      "by phone":"1-866-403-8000"
      ]
    },
    {
      "organization":"Moments Matter",
      "description":"Through simple, relatable stories, we’re showing Alberta leaders how easy it can be to strengthen and grow positive workplace cultures that help people feel safe and supported, help them grow and succeed – and help stop sexual harassment."
      "contact": [
      "online": ["momentsmatter.info", "https://momentsmatter.info"],
      "by email":null,
      "by phone":null,
      ]
    },
  ]
  }
  ```

## Legal Information (not options):

- Centre for Public Legal Education Alberta
  CPLEA mission is to engage the public in promoting, accessing, and enhancing justice in Canada. They share legal information via workshops, articles, websites, FAQ sheets, etc on a variety of topics including Family Law, Employment Law, Human Rights Law, Landlord & Tenant, etc.
  www.cplea.ca/bullying-harassment/
  Info@cplea.ca

- AJEFA – Association des juristes d’expression francaise de l’Alberta
  The AJEFA's mission is to facilitate access to judicial services in French and to promote the use of French in the administration of justice in Alberta. AJEFA develops and coordinates public legal education and information programs, promotes the use of French within the legal system, offers legal information in French and informs the general public of their rights to access legal services in the language of their choice.
  https://www.ajefa.ca
  780-450-2443
  bureau@ajefa.ca

- ACLRC - Alberta Civil Liberties Research Centre
  Our mission is to promote respect for civil liberties and human rights in Alberta through research and education to contribute to a more just and inclusive community.
  https://www.aclrc.com/sexual-harrasmt-in-workplace
  aclrc@ucalgary.ca

  ```
  {
  "legalInfo":
  [
    {
      "organization":"Centre for Public Legal Education Alberta",
      "description":"CPLEA mission is to engage the public in promoting, accessing, and enhancing justice in Canada. They share legal information via workshops, articles, websites, FAQ sheets, etc on a variety of topics including Family Law, Employment Law, Human Rights Law, Landlord & Tenant, etc."
      "contact": [
      "online": ["cplea.ca", "www.cplea.ca/bullying-harassment/"],
      "by email":"info@cplea.ca",
      "by phone":null
      ]
    },
    {
      "organization":"AJEFA – Association des juristes d’expression francaise de l’Alberta",
      "description":"  The AJEFA's mission is to facilitate access to judicial services in French and to promote the use of French in the administration of justice in Alberta. AJEFA develops and coordinates public legal education and information programs, promotes the use of French within the legal system, offers legal information in French and informs the general public of their rights to access legal services in the language of their choice."
      "contact": [
      "online": ["ajefa.ca", "https://ajefa.ca"],
      "by email":"bureau@ajefa.ca",
      "by phone": "780-450-2443",
      ]
    },
    {
      "organization":"ACLRC - Alberta Civil Liberties Research Centre",
      "description":"Our mission is to promote respect for civil liberties and human rights in Alberta through research and education to contribute to a more just and inclusive community."
      "contact": [
      "online": ["aclrc.com", "https://www.aclrc.com/sexual-harrasmt-in-workplace"],
      "by email":"aclrc@ucalgary.ca",
      "by phone":null,
      ]
    },
  ]
  }
  ```

## Employment Rights:

- Workers Resource Centre
  P: 403-264-8100
  www.Helpwrc.org

- Centre for Public Legal Education Alberta
  CPLEA mission is to engage the public in promoting, accessing, and enhancing justice in Canada. They share legal information via workshops, articles, websites, FAQ sheets, etc on a variety of topics including Family Law, Employment Law, Human Rights Law, Landlord & Tenant, etc.
  https://www.cplea.ca/work/
  Info@cplea.ca

```
{
"employmentRights":
[
  {
    "organization":"Workers’ Resource Centre",
    "description":"TBD"
    "contact": [
    "online": ["helpwrc.org", "https://helpwrc.org"],
    "by email":null,
    "by phone":"403-264-8100"
    ]
  },
  {
    "organization":"Centre for Public Legal Education Alberta",
    "description":"CPLEA mission is to engage the public in promoting, accessing, and enhancing justice in Canada. They share legal information via workshops, articles, websites, FAQ sheets, etc on a variety of topics including Family Law, Employment Law, Human Rights Law, Landlord & Tenant, etc."
    "contact": [
    "online": ["cplea.ca", "www.cplea.ca/bullying-harassment/"],
    "by email":"info@cplea.ca",
    "by phone":null
    ]
  },
]
}
```

## Manage My Case:

Workers Resource Centre
P: 403-264-8100
www.Helpwrc.org

```
{
"employmentRights":
[
  {
    "organization":"Workers’ Resource Centre",
    "description":"TBD"
    "contact": [
    "online": ["helpwrc.org", "https://helpwrc.org"],
    "by email":null,
    "by phone":"403-264-8100"
    ]
  },
]
}
```

# Blurb beside guided pathway:

Sexual Harassment is any unwelcome conduct, comment, gesture, or contact that is gender-related or sexual in nature that makes the recipient feel uncomfortable, unsafe, offended, or humiliated, whether intended or not.

# TOOL Headline

??? some sort of "we've got you" casual statement
