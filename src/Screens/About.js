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
import Person4 from "../Assets/person4.svg";
import Person5 from "../Assets/person5.svg";
import Person6 from "../Assets/person6.svg";
import Person7 from "../Assets/person7.svg";
import Person8 from "../Assets/person8.svg";
import Person9 from "../Assets/person9.svg";
import Person10 from "../Assets/person10.svg";
import Person11 from "../Assets/person11.svg";
import Person15 from "../Assets/person15.svg";
import Person16 from "../Assets/person16.svg";
import Person17 from "../Assets/person17.svg";
import Person18 from "../Assets/person18.svg";
import Person19 from "../Assets/person19.svg";
import Person20 from "../Assets/person20.svg";
import Person21 from "../Assets/person21.svg";
import Person22 from "../Assets/person22.svg";
import Person23 from "../Assets/person23.svg";
import { FadeIn } from "react-slide-fade-in";
const About = () => {
  const objectList = [
    {
      Img: Person1,
      Name: "DivineGift Asoetan",
      Position: "CEO/Co-Founder",
    },
    {
      Img: Person20,
      Name: "Olabisi Folorunsho",
      Position: "COO/Co-Founder",
    },
    {
      Img: Person3,
      Name: "Kolawole Elijah",
      Position: "CTO",
    },
    {
      Img: Person4,
      Name: "Chinedu Elijah",
      Position: "Project Manager",
    },
    {
      Img: Person8,
      Name: "Okunade Ifeoluwa",
      Position: "Lead Medical Director",
    },
    {
      Img: Person23,
      Name: "Mustapha Favour",
      Position: "Product Designer",
    },
    {
      Img: Person6,
      Name: "Sanusi Habib",
      Position: "Graphics Designer",
    },
    {
      Img: Person7,
      Name: "Ajiboye Gideon",
      Position: "Web Developer",
    },
    {
      Img: Person17,
      Name: "Samuel Aholu",
      Position: "Web Developer",
    },
    {
      Img: Person21,
      Name: "Onyedikachi Marvellous",
      Position: "Content Developer",
    },
    {
      Img: Person19,
      Name: "Caleb Nwachukwu",
      Position: "Web Developer",
    },
    {
      Img: Person16,
      Name: "Kolawole Emmanuel",
      Position: "BackEnd Developer",
    },
    {
      Img: Person18,
      Name: "Habeeb Mustapha",
      Position: "Graphics Designer",
    },
  ];
  return (
    <div className="container-box bg-secondary">
      <section className="lg:p-20 p-10 lg:grid grid-cols-7  ">
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
                HealthGO Technologies is Africa’s gateway to quality, affordable
                and faster Healthcare.
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
                    Teletherapy and Consultations with Doctors and other health
                    personels.
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
                  <p className="ml-3">
                    Online purchase of drugs, kits and other items from
                    Pharmacies via the HealthGO mobile App.
                  </p>
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
                  <p className="ml-3">
                    Health education in a dynamic and better way.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="col-span-3 relative">
          <img src={Img4} className="on-top animate-spin" alt="" />
          <img src={Img3} className="carry " alt="" />
        </div>
      </section>
      <Mission2 />
      <section>
        <div className="lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7">
          <div className="col-span-4 mr-30">
            <p className="waitlist-head text-primary">Milestones</p>
            <div className="col-span-4">
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={0}
              >
                <p className="text-blackk about-sub mt-5 ">
                  HealthGO Technologies is Africa’s gateway to quality,
                  affordable and faster Healthcare.
                </p>
              </FadeIn>
              <div className="offer text-blackk mt-5">
                <FadeIn
                  from="left"
                  positionOffset={400}
                  triggerOffset={200}
                  delayInMilliseconds={200}
                >
                  <p>At HealthGO, we offer: </p>
                  <div className="list">
                    <p>1.</p>
                    <p className="ml-3">
                      Teletherapy and Consultations with Doctors and other
                      health personels.
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
                    <p className="ml-3">
                      Online purchase of drugs, kits and other items from
                      Pharmacies via the HealthGO mobile App.
                    </p>
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
                    <p className="ml-3">
                      Health education in a dynamic and better way.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pt-0 pt-20">
            <img
              src={Img7}
              alt=""
              className="animate__animated animate__infinite	infinite animate__swing"
            />
          </div>
        </div>
      </section>
      <div className="waitlist-section pt-32 lg:pt-60"></div>
      <section className="pb-10 bg-primary lg:p-20 p-10">
        <p className="about-header  text-white text-center ">Meet The Team</p>
        <p className="text-white about-sub pt-10">
          Meet the committed brains and hands building HealthGO Technologies and
          pushing the gospel of affordable and quality healthcare for every
          African.
        </p>
        <div className="pt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {objectList.map((person, i) => {
            return (
              <div className="relative mt-28">
                <img src={person.Img} alt="" className="absolute team-image" />
                <img src={Logo} alt="" className="team-logo absolute" />
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
      </section>
      <div className="waitlist-section-down pt-32 lg:pt-48 "></div>
      <Connect />
    </div>
  );
};

export default About;
