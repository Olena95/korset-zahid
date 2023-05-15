import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import Link from "next/link";
//Fade in effect
import FadeIn from "react-fade-in";

const AllCases = () => {
  const works = [
    {
      image: "/images/doctor2.jpg",
      title: "Результат 1",
      diagnosis: "Сколіоз",
      desc: "Початкове скривлення 30 градусів, після 6 місяців спина вирівнялась до 20 градусів ",
    },
    {
      image: "/images/doctor2.jpg",
      title: "Результат 1",
      diagnosis: "Сколіоз",
      desc: "Початкове скривлення 30 градусів, після 6 місяців спина вирівнялась до 20 градусів ",
    },
    {
      image: "/images/doctor2.jpg",
      title: "Результат 1",
      diagnosis: "Сколіоз",
      desc: "Початкове скривлення 30 градусів, після 6 місяців спина вирівнялась до 20 градусів ",
    },
    {
      image: "/images/doctor2.jpg",
      title: "Результат 1",
      diagnosis: "Сколіоз",
      desc: "Початкове скривлення 30 градусів, після 6 місяців спина вирівнялась до 20 градусів ",
    },
    {
      image: "/images/doctor2.jpg",
      title: "Результат 1",
      diagnosis: "Сколіоз",
      desc: "Початкове скривлення 30 градусів, після 6 місяців спина вирівнялась до 20 градусів ",
    },
    {
      image: "/images/doctor2.jpg",
      title: "Результат 1",
      diagnosis: "Сколіоз",
      desc: "Початкове скривлення 30 градусів, після 6 місяців спина вирівнялась до 20 градусів ",
    },
  ];

  return (
    <React.Fragment>
      {/* breadcrumb */}
      <section
        className="bg-half-170 methodology-header"
        style={{ background: `url("/images/back-doctor.jpg") center center` }}
      >
        <div className="bg-overlay"></div>
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading">
                <h4 className="title text-white title-dark mb-0">
                  {" "}
                  Результати лікування
                </h4>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  Щоб отримати такі результати, потрібна час і витримка! Ми
                  пишаємо нашими пацієнтами та ділимось з вами їхніми
                  результатими!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <Container>
          <Row className="projects-wrapper">
            {works.map((cases, key) => (
              <Col
                key={key}
                lg={4}
                md={6}
                xs={12}
                className="mt-4 pt-2 business"
              >
                <FadeIn delay={100}>
                  <Card className="blog border-0 work-container work-primary work-classic shadow rounded-md overflow-hidden">
                    <img
                      src={cases.image}
                      className="img-fluid work-image"
                      alt="Landrick"
                    />
                    <Card.Body>
                      <div className="content">
                        <h5 className="mt-3">
                          <Link
                            href="page-case-detail"
                            className="text-dark title"
                          >
                            {cases.title}
                          </Link>
                        </h5>
                        <p className="text-muted">Діагнос: {cases.diagnosis}</p>
                        <p className="text-muted">{cases.desc}</p>
                        <Link href="#" className="text-primary link h6">
                          Записатись на консультацію
                          <i className="uil uil-angle-right-b align-middle"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </FadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AllCases;
