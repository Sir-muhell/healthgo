import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../Assets/image5.svg";

const Privacy = () => {
  return (
    <section className="container-box bg-secondary lg:p-20 p-10">
      <div className="lg-screen">
        <p className="privacy text-primary">Privacy Policy</p>

        <div className="lg:grid grid-cols-5 gap-10 pt-10">
          <div className=" lg:col-span-2 ">
            <div className="privacy-box">
              <div className="relative">
                <div className="privacy-card">
                  <p className="privacy-card-head text-primary">
                    Table of Contents
                  </p>
                  <ul className=" pt-10 content-text ">
                    <a href="#">
                      <li className="flex items-center mb-5">
                        Introduction
                        <span className="ml-3">
                          <HiArrowNarrowRight />
                        </span>
                      </li>
                    </a>
                    <a href="#registration">
                      <li className="flex items-center mb-5">
                        Registration and account
                        <span className="ml-3">
                          <HiArrowNarrowRight />
                        </span>
                      </li>
                    </a>
                    <a href="#service">
                      <li className="flex items-center mb-5">
                        Service Limitations and Modifications
                        <span className="ml-3">
                          <HiArrowNarrowRight />
                        </span>
                      </li>
                    </a>
                    <a href="#use">
                      <li className="flex items-center mb-5">
                        Use of website and mobile applications
                        <span className="ml-3">
                          <HiArrowNarrowRight />
                        </span>
                      </li>
                    </a>
                    <a href="#agreement">
                      <li className="flex items-center mb-20">
                        User agreement and disclaimer
                        <span className="ml-3">
                          <HiArrowNarrowRight />
                        </span>
                      </li>
                    </a>
                  </ul>
                </div>
                <img
                  src={Logo}
                  alt="Heealthgo Logo"
                  className="privacy-card-logo"
                />
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:pt-0 pt-40">
            <div id="introduction">
              <p className="privacy-head">Introduction</p>
              <div className="privacy-text">
                <p>
                  HealthGO technologies is the trading name for the company. We
                  operate an/a Healthcare platform consisting of a website and
                  mobile application together with supporting payment
                  infrastructure for the purchase of Telemedicine products
                  and/or services.
                </p>
                <p>
                  These General terms and conditions shall apply to users of the
                  platform (website and mobile application) and shall govern
                  your use of the platform and related services. By using our
                  platform you accept these general terms and conditions in
                  full. If you disagree with these general terms and conditions
                  or any part of these General terms and conditions you must not
                  use our platform.
                </p>
                <p>
                  If you use our platform in the course of a business or other
                  organizational project then by so doing you:
                </p>
                <ul className="list-disc pl-10">
                  <li>
                    Confirm that you have obtained the necessary authority to
                    agree to these general terms and conditions
                  </li>
                  <li>
                    Bind both yourself and the person company or other legal
                    entity that operates that business or organizational project
                    to these general terms and conditions; and
                  </li>
                  <li>
                    Agree that you in these general terms and conditions shall
                    reference both the individual user and the relevant person
                    company or legal entity unless the context requires
                    otherwise.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-24" id="registration"></div>
            <div>
              <p className="privacy-head">Registration and account</p>
              <div className="privacy-text">
                <p>
                  You may not register with our platform if you are under IB
                  years of age (by using our platform or agreeing to these
                  general terms and conditions you warrant and represent to us
                  that you are at least 18 years of age).
                </p>
                <p>
                  If you register far an account with our platform you will be
                  asked to provide an email address/user ID and password and you
                  agree to:
                </p>
                <ul className="list-disc pl-10">
                  <li>Keep your password confidential;</li>
                  <li>
                    Notify us in writing immediately (using our contact details
                    provided at HealthGO technologies if you become aware of any
                    disclosure of your password; and
                  </li>
                  <li>
                    Be responsible for any activity on our platform arising out
                    of any failure to keep your password confidential and that
                    you may be held liable for any lasses arising out of such a
                    failure.
                  </li>
                  <li>
                    Your account shall be used exclusively by you and you shall
                    not transfer your account to any third party. If you
                    authorize any third party to manage your account on your
                    behalf this shall be at your own risk.
                  </li>
                  <li>
                    We may suspend or cancel your account details at any time in
                    our sole discretion and without notice or explanation
                    providing that if we cancel any products or services you
                    have paid far but not received and you have not breached
                    these general terms and conditions we will refund you in
                    respect of the same.
                  </li>
                  <li>
                    You may cancel your account on our platform by contacting
                    us.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-24" id="service"></div>
            <div>
              <p className="privacy-head ">
                Service Limitations and Modifications
              </p>
              <div className="privacy-text">
                <p>
                  We use reasonable care and skill to keep the Platform's
                  Service operational and to provide you with a personalized,
                  immersive experience. However, our service offerings and their
                  availability may change from time to time and subject to
                  applicable laws, without liability to you; for example:
                </p>
                <p>
                  If you register far an account with our platform you will be
                  asked to provide an email address/user ID and password and you
                  agree to:
                </p>
                <ul className="list-disc pl-10">
                  <li>
                    HealthGO technologies service may experience temporary
                    interruptions due to technical difficulties, maintenance or
                    testing, or updates, including those required to reflect
                    changes in relevant laws and regulatory requirements.
                  </li>
                  <li>
                    We aim to evolve and improve our services constantly, and we
                    may modify, suspend, or stop (permanently or temporarily)
                    providing all or part of the HealthGO technologies service
                    (including particular functions, features, subscription
                    plans and promotional offerings).
                  </li>
                  <li>
                    The platform has no obligation to provide any specific
                    content through the HealthGO technologies
                  </li>
                  <li>
                    If you have already paid for a subscription that got
                    discontinued by our discretion, we will refund the fees that
                    were paid for the service that was discontinued by us. Your
                    account and billing information must be up to date in order
                    for us to refund you.
                  </li>
                  <li>
                    We have no liability to you, nor any obligation to provide a
                    refund to you, in connection with internet or other service
                    outages or failures that are caused by the actions of
                    government authorities. other third parties or events beyond
                    our control.
                  </li>
                </ul>
                <p>
                  Notwithstanding you may forward links to products and/or
                  services on our website and redistribute our newsletter and
                  promotional materials in print and electronic form to any
                  person.
                </p>
                <p>
                  We reserve the right to suspend or restrict access to our
                  website to areas of our website and/or to functionality upon
                  our website. We may far example suspend access to the website
                  during server maintenance or when we update the website. You
                  must not circumvent or bypass or attempt to circumvent or
                  bypass any access restriction measures on the website.
                </p>
              </div>
            </div>
            <div className="pt-24" id="use"></div>
            <div>
              <p className="privacy-head">
                Use of website and mobile applications
              </p>
              <div className="privacy-text">
                <p>You may:</p>

                <ul className="list-disc pl-10">
                  <li>View pages from our website in a web browser</li>
                  <li>
                    Download pages from our website for caching in a web browser
                  </li>
                  <li>
                    Print pages from our website for your own personal and
                    non-commercial use providing that such printing is not
                    systematic or excessive; and
                  </li>
                  <li>
                    Use our platform services by means of a web browser subject
                    to the other provisions of these general terms and
                    conditions.
                  </li>
                  <li>
                    Except as expressly permitted by these general terms and
                    conditions you must not edit or otherwise modify any
                    material on our website. Unless you own or control the
                    relevant rights in the material you must not: Republish
                    material from our website (including republication on
                    another website) Tell, rent or sub-license material from our
                    website; Show any material from our website in public;
                    Exploit material from our website for a commercial purpose;
                    or Redistribute material from our website.
                  </li>
                  <li>
                    Except as expressly permitted by these general terms and
                    conditions you must not edit or otherwise modify any
                    material on our website.
                  </li>
                  <li>
                    Unless you own or control the relevant rights in the
                    material you must not:
                  </li>
                  <li>
                    Republish material from our website (including republication
                    on another website)
                  </li>
                  <li>Tell, rent or sub-license material from our website;</li>
                  <li>Show any material from our website in public; or</li>
                  <li>
                    Exploit material from our website for a commercial purpose;
                  </li>
                  <li>Redistribute material from our website.</li>
                </ul>
              </div>
            </div>
            <div className="pt-24" id="agreement"></div>
            <div>
              <p className="privacy-head">USER AGREEMENT AND DISCLAIMER</p>
              <div className="privacy-text">
                <ul className="list-disc pl-10">
                  <li>
                    The information on this website [or mobile application] is
                    not intended or implied to be a substitute for professional
                    medical advice, diagnosis or treatment. All content,
                    including text, graphics, images and information, contained
                    on or available through this website is for general
                    information purposes only. All information on this site is
                    well researched and reviewed and is provided in good faith.
                    HealthGo makes no representation or warranty of any kind,
                    express or implied, and assumes no responsibility for the
                    accuracy, validity, reliability, availability or
                    completeness of any information contained on or available
                    through this website, and such information is subject to
                    change without notice.
                  </li>
                  <li>
                    Under no circumstance shall we have any liability to you
                    (whether in contract, tort, or otherwise) for any loss or
                    damage of any kind incurred as a result of the use of this
                    site [or mobile application] or reliance on any information
                    provided on the site [or mobile application]. Your use of
                    the site [or our mobile application] and your reliance on
                    any information thereof is solely at your own risk.
                  </li>
                  <li>
                    We advise that you confirm any information obtained from or
                    through this website [or our mobile application] with other
                    sources, and review all information regarding any medical
                    condition or treatment with your physician or heath
                    practitioner. Never disregard professional medical advice or
                    delay seeking medical treatment because of something you
                    have read on or accessed through this website.
                  </li>
                  <li>
                    HealthGo does not recommend, endorse or make any
                    representation about the efficacy, appropriateness or
                    suitability of any specific tests, products, procedures,
                    treatments, services, opinions, health care providers or
                    other information that may be contained on or available
                    through this web site. HealthGo is neither responsible nor
                    liable for any advice, course of treatment, diagnosis or any
                    other information, services or products that you obtain
                    through this website.
                  </li>
                  <li>
                    Medical and health practitioners affiliated with HealthGo
                    are duly licensed and registered professionals. Health
                    practitioners associated with HealthGo are independent
                    practitioners and members of health institutions in Nigeria
                    and are neither employees nor agents of HealthGo. To this
                    extent, HealthGo is not responsible for the services
                    provided by the said health practitioners.
                  </li>
                  <li>
                    HealthGo shall not bear any liability for hyperlinks to
                    websites or services of third parties included on this
                    website [or our mobile application]. From our service, you
                    can visit other websites by following hyperlinks to such
                    external sites. While we strive to provide only quality and
                    relevant links to useful and ethical websites, we have no
                    control over the content and nature of these sites. These
                    links to other websites do not imply a recommendation for
                    all the content found on these sites. Site owners and
                    content may change without notice and may occur before we
                    have the opportunity to remove a link which may have gone
                    'bad'.
                  </li>
                  <li>
                    In the event that any injury or loss is occasioned by the
                    use of this website, the user shall immediately notify us
                    and give particulars of such injury or loss.
                  </li>
                </ul>
                <p>
                  By accessing or using our service, you signify that you have
                  read, understood, and agreed to the disclaimer statement
                  contained above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
