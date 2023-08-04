// components
import { Tab } from "@headlessui/react";

// styles
import "./ResourcesTabTool.css";

function ResourcesTabTool() {
  return (
    <>
      <Tab.Group>
        <Tab.List>
          <Tab>
            <span>Sexual Harassment</span>
          </Tab>
          <Tab>
            <span>Legal Information</span>
          </Tab>
          <Tab>
            <span>Employment Rights</span>
          </Tab>
          <Tab>
            <span>Book Training</span>
          </Tab>
          <Tab>
            <span>File a Complaint</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="tab contact-card">
              <p className="org">Workers’ Resource Centre</p>
              <p className="org-description">
                The WRC is an employment and human rights advocacy agency that
                provides casework support, public legal education, and support
                with workplace sexual harassment issues. We serve all of Alberta
                and our services are <em>free</em>.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org">info@helpwrc.org</a>
              </p> */}
              <p className="web">
                <a href="https://helpwrc.org">helpwrc.org</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">Alberta’s One Line for Sexual Violence</p>
              <span className="org-description">
                <p>
                  Alberta’s One Line for Sexual Violence is a toll-free talk,
                  text, and chat service that provides emotional support,
                  information, and referral to anyone who has experienced or
                  been impacted by sexual violence including sexual harassment.
                </p>
                <p>
                  One Line can provide support in the moment while also
                  connecting Albertans to the nearest sexual assault centre for
                  access to specialized services for individuals, families and
                  communities across the province.
                </p>
                <p>
                  Support is available seven days a week, with access to
                  interpretation services in over 200 languages.
                </p>
              </span>
              <hr />
              <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org" />
              </p> */}
              <p className="web">
                <a href="https://aasas.ca">aasas.ca</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">#momentsmatter</p>
              <p className="org-description">
                Through simple, relatable stories, we’re showing Alberta leaders
                how easy it can be to strengthen and grow positive workplace
                cultures that help people feel safe and supported, help them
                grow and succeed – and help stop sexual harassment.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p> */}
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org" />
              </p> */}
              <p className="web">
                <a href="https://momentsmatter.info">momentsmatter.info</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* <div className="card">Legal Information</div> */}

            <div className="tab contact-card">
              <p className="org">Centre for Public Legal Education Alberta</p>
              <p className="org-description">
                CPLEA creates resources that help people understand their rights
                and obligations under the law. They strive to improve both
                access to justice and the quality of justice available to
                Albertans. They share free legal information on a variety of
                topics that impact Albertans via workshops, articles, websites,
                FAQs, info sheets, and more.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p> */}
              <p className="email">
                <a href="mailto:info@cplea.ca">info@cplea.ca</a>
              </p>
              <p className="web">
                <a href="https://cplea.ca/bullying-harassment/">cplea.ca</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">
                AJEFA – Association des juristes d’expression francaise de
                l’Alberta
              </p>
              <span className="org-description">
                {/* The AJEFA's mission is to facilitate access to judicial services
                in French and to promote the use of French in the administration
                of justice in Alberta. AJEFA develops and coordinates public
                legal education and information programs, promotes the use of
                French within the legal system, offers legal information in
                French and informs the general public of their rights to access
                legal services in the language of their choice. */}
                <p>
                  <em className="pretty">
                    Situé à La Cité francophone d'Edmonton et à Guinness House à
                    Calgary, l'AJEFA et son centre d'information
                    juridique assure des services gratuits et confidentiels
                    d'information juridique, d'orientation et d'accompagnement
                    aux personnes faisant face à un problème d'ordre juridique.
                  </em>
                </p>

                <p>
                  The AJEFA's mission is to facilitate access to judicial
                  services in French in Alberta. AJEFA operates the Alberta
                  Legal Information Centre in Calgary and Edmonton that offers
                  free legal information (not advice), public notary and
                  referral services in French and in English.
                </p>
              </span>
              <hr />
              <p className="phone">
                <a href="tel:1-780-450-2443">780-450-2443</a>
              </p>
              <p className="email">
                <a href="mailto:bureau@ajefa.ca?subject=Besoin d'information">
                  bureau@ajefa.ca
                </a>
              </p>
              <p className="web">
                <a href="https://ajefa.ca">ajefa.ca</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">
                ACLRC - Alberta Civil Liberties Research Centre
              </p>
              <p className="org-description">
                Our mission is to promote respect for civil liberties and human
                rights in Alberta through research and education to contribute
                to a more just and inclusive community.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p> */}
              <p className="email">
                <a href="mailto:aclrc@ucalgary.ca">aclrc@ucalgary.ca</a>
              </p>
              <p className="web">
                <a href="https://aclrc.com">aclrc.com</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* <div className="card">Employment Rights</div> */}
            <div className="tab contact-card">
              <p className="org">Workers’ Resource Centre</p>
              <p className="org-description">
                The WRC is an employment and human rights advocacy agency that
                provides casework support, public legal education, and support
                with workplace sexual harassment issues. We serve all of Alberta
                and our services are <em>free</em>.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org">info@helpwrc.org</a>
              </p> */}
              <p className="web">
                <a href="https://helpwrc.org">helpwrc.org</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">Centre for Public Legal Education Alberta</p>
              <p className="org-description">
                CPLEA creates resources that help people understand their rights
                and obligations under the law. They strive to improve both
                access to justice and the quality of justice available to
                Albertans. They share free legal information on a variety of
                topics that impact Albertans via workshops, articles, websites,
                FAQs, info sheets, and more.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p> */}
              <p className="email">
                <a href="mailto:info@cplea.ca">info@cplea.ca</a>
              </p>
              <p className="web">
                <a href="https://cplea.ca/bullying-harassment/">cplea.ca</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="tab contact-card">
              <p className="org">#momentsmatter</p>
              <p className="org-description">
                Through simple, relatable stories, we’re showing Alberta leaders
                how easy it can be to strengthen and grow positive workplace
                cultures that help people feel safe and supported, help them
                grow and succeed – and help stop sexual harassment.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p> */}
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org" />
              </p> */}
              <p className="web">
                <a href="https://momentsmatter.info">momentsmatter.info</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* <div className="card">Manage My Case</div> */}
            <div className="tab contact-card">
              <p className="org">Workers’ Resource Centre</p>
              <p className="org-description">
                The WRC is an employment and human rights advocacy agency that
                provides casework support, public legal education, and support
                with workplace sexual harassment issues. We serve all of Alberta
                and our services are <em>free</em>.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org">info@helpwrc.org</a>
              </p> */}
              <p className="web">
                <a href="https://helpwrc.org">helpwrc.org</a>
              </p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>{" "}
    </>
  );
}

export default ResourcesTabTool;
