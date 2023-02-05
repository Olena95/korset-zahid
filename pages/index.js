import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
//Import Components
import AboutUs from "../components/contentBlock/AboutUs";
import Appointment from "../components/contentBlock/Appointment";
import Counter from "../components/contentBlock/Counter";

import Section from "../components/contentBlock/Section";
import Services from "../components/contentBlock/Services";
import SectionTitle from "../components/SectionTitle";
import ReviewsSlider from "../components/ReviewsSlider";

const Index = () => {
  const reviews = [
    {
      id: 1,
      img: "/images/client/01.jpg",
      name: "Thomas Israel",
      post: "C.E.O",
      desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
      rating: 5,
    },
    {
      id: 2,
      img: "/images/client/02.jpg",
      name: "Barbara McIntosh",
      post: "M.D",
      desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
      rating: 4.5,
    },
    {
      id: 3,
      img: "/images/client/03.jpg",
      name: "Carl Oliver",
      post: "P.A",
      desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      rating: 5,
    },
    {
      id: 4,
      img: "/images/client/04.jpg",
      name: "Christa Smith",
      post: "Manager",
      desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
      rating: 5,
    },
    {
      id: 5,
      img: "/images/client/05.jpg",
      name: "Dean Tolle",
      post: "Developer",
      desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
      rating: 5,
    },
    {
      id: 6,
      img: "/images/client/06.jpg",
      name: "Jill Webb",
      post: "Designer",
      desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
      rating: 5,
    },
  ];
  return (
    <>
      <Section />
      <Appointment />
      <section className="section">
        <AboutUs />
        <Services />
      </section>
      <Counter />
      <section className="section pt-0">
        <Container className="">
          {/* section title */}
          <SectionTitle title="Відгуки наших клієнтів" />

          {/* clients slider */}
          <ReviewsSlider reviews={reviews} colClass="mt-5" className="mt-100" />
        </Container>
      </section>

      {/* <Popup /> */}
    </>
  );
};
export default Index;
