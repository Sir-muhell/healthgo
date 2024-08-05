import React from "react";
import Img3 from "../Assets/image4.svg";
import Img4 from "../Assets/image5.svg";
import Logo from "../Assets/image15.svg";
import Img7 from "../Assets/image12.svg";
import Connect from "../Components/Connect";
import Mission2 from "../Components/Mission2";
import Person1 from "../Assets/person1.svg";
import Person2 from "../Assets/person2.svg";
import Person3 from "../Assets/person3.svg";
import Person5 from "../Assets/person5.svg";
import Person4 from "../Assets/person4.svg";
import Person6 from "../Assets/person6.png";
import Person7 from "../Assets/person7.svg";
import Person8 from "../Assets/person8.svg";
import Person16 from "../Assets/person16.svg";
import Person17 from "../Assets/person17b.webp";
import Person20 from "../Assets/person20.svg";
import Person26 from "../Assets/person26.svg";
import Person28 from "../Assets/person28.png";
import Person29 from "../Assets/person29.svg";
import Person30 from "../Assets/person30.svg";
import { FadeIn } from "react-slide-fade-in";
import { HiArrowNarrowRight } from "react-icons/hi";
const About = () => {
  const objectList = [
    {
      Img: Person1,
      Name: "Divinegift Soetan",
      Position: "CEO/Co-Founder",
    },
    {
      Img: Person20,
      Name: "Olabisi Folorunso-Lanlehin",
      Position: "COO/Co-Founder",
    },
    {
      Img: Person3,
      Name: "Elijah Kolawole",
      Position: "CTO/Co-Founder",
    },
    {
      Img: Person8,
      Name: "Dr. Eileen C. Okenwa",
      Position: "Chief Innovation Officer",
    },
    {
      Img: Person4,
      Name: "Chinedu Elijah",
      Position: "Project Manager",
    },
    {
      Img: Person7,
      Name: "Gideon Ajiboye",
      Position: "Product Manager",
    },
    {
      Img: Person30,
      Name: "Ayomide Obiwale",
      Position: "Mobile Developer",
    },
    {
      Img: Person17,
      Name: "Samuel Aholu",
      Position: "Web Developer",
    },
    {
      Img: Person16,
      Name: "Emmanuel Kolawole",
      Position: "BackEnd Development Lead",
    },
    {
      Img: Person28,
      Name: "Joshua Ayoola",
      Position: "Product Design Lead",
    },
    {
      Img: Person5,
      Name: "Samuel Mensah",
      Position: "Graphics Design Lead",
    },
    {
      Img: Person6,
      Name: "Sanusi Habib",
      Position: "Graphics Designer",
    },
    {
      Img: Person29,
      Name: "Abel Agbele",
      Position: "Motion Designer",
    },
    {
      Img: Person2,
      Name: "Precious Soetan",
      Position: "Customer Success Lead",
    },
    {
      Img: Person26,
      Name: "Abdullahi Adam",
      Position: "Content Writer",
    },
  ];
  return (
    <div className="container-box bg-secondary">
      <section className="lg:p-20 p-10 lg:grid grid-cols-7 lg-screen ">
        <div className="col-span-4 mr-30 pb-20">
          <p className="waitlist-head text-primary">About Us</p>
          <div className="col-span-4">
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <p className="text-blackk about-sub mt-5 ">
                HealthGO Health Technology Limited is fractionalizing health
                insurance, breaking the barriers for middle and low-income
                earners to access affordable and beneficial health insurance
                easily.
              </p>
            </FadeIn>
            <div className="offer text-blackk mt-5">
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={200}
              >
                <p>At HealthGO, we offer:</p>
                <div className="list">
                  <p>1.</p>
                  <p className="ml-3">
                    Pay small small Health insurance product
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={400}
              >
                <div className="list">
                  <p>2.</p>
                  <p className="ml-3">Credit to Healthcare MSMEs</p>
                </div>
              </FadeIn>
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
              >
                <div className="list">
                  <p>3.</p>
                  <p className="ml-3">Advance healthcare benefits</p>
                </div>
              </FadeIn>
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
              >
                <div className="list">
                  <p>4.</p>
                  <p className="ml-3">Health Education</p>
                </div>
              </FadeIn>
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
              >
                <div className="list">
                  <p>5.</p>
                  <p className="ml-3">Healthcare Donation</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="col-span-3 relative">
          <img src={Img4} className="on-top hover:animate-spin" alt="about" />
          <img src={Img3} className="carry " alt="about" />
        </div>
      </section>
      <Mission2 />
      <section>
        <div className="lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7 lg-screen">
          <div className="col-span-4 mr-30">
            <p className="waitlist-head text-primary">Roadmap</p>
            <div className="col-span-4">
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={0}
              >
                <p className="text-blackk about-sub mt-5 ">
                  Step-by-step process of building a usable and sustaiinable
                  product
                </p>
              </FadeIn>
              <div className="offer text-blackk mt-5">
                <FadeIn
                  from="left"
                  positionOffset={400}
                  triggerOffset={200}
                  delayInMilliseconds={200}
                >
                  <div>
                    <p>
                      Explore our product milestones and progress by clicking
                      the button below.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn
                  from="left"
                  positionOffset={400}
                  triggerOffset={200}
                  delayInMilliseconds={200}
                >
                  <a href="https://docs.healthgotechnologies.com/healthgo/roadmap">
                    <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                      <span className="mr-2">See Roadmap</span>
                      <HiArrowNarrowRight />
                    </button>
                  </a>
                </FadeIn>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pt-0 pt-20">
            <img
              src={Img7}
              alt="Roadmap"
              className="animate__animated animate__infinite	infinite animate__swing"
            />
          </div>
        </div>
      </section>
      <div className="waitlist-section pt-36 lg:pt-72"></div>
      <section className="pb-10 bg-primary lg:p-20 p-10 ">
        <div className="lg-screen">
          <p className="about-header  text-white text-center ">Meet The Team</p>
          <p className="text-white about-sub pt-10">
            Meet the committed brains and hands building HealthGO and pushing
            the gospel of affordable and quality healthcare for every African.
          </p>
          <div className="pt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {objectList.map((person, i) => {
              return (
                <div className="relative mt-28">
                  <img
                    src={person.Img}
                    alt="Team Pic"
                    className="absolute team-image"
                  />
                  <img
                    src={Logo}
                    alt="Healthgo Logo"
                    className="team-logo absolute"
                  />
                  <div className="about-card">
                    <p className="team-name text-primary text-center pt-20">
                      {person.Name}
                    </p>
                    <p className="team-title text-center pt-2">
                      {person.Position}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-36 lg:pt-72 "></div>
      <Connect />
    </div>
  );
};

export default About;
