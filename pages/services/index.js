import React, { useState } from "react";
import Link from "next/link";
import PagesHeading from "@/components/PagesHeading";
import WorkProcess from "@/components/WorkProcess";
import { Col, Container, Row, Card } from "react-bootstrap";

const Services = () => {
  const [open, setOpen] = useState(false);
  const blogs = [
    {
      id: 1,
      image: "/images/work/13.jpg",
      title: "Діагностика",
      desc: "Due to its widespread use as filler text for layouts, non-readability",
    },
    {
      id: 2,
      image: "/images/work/14.jpg",
      title: "Лікування",
      desc: "Due to its widespread use as filler text for layouts, non-readability",
    },
    {
      id: 3,
      image: "/images/work/15.jpg",
      title: "Виготовлення",
      desc: "Due to its widespread use as filler text for layouts, non-readability",
    },
    {
      id: 4,
      image: "/images/work/16.jpg",
      title: "Консультація",
      desc: "Due to its widespread use as filler text for layouts, non-readability",
    },
  ];

  return (
    <>
      <PagesHeading title="Послуги" />

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
          <Row>
            {blogs.map((blog, key) => (
              <Col lg={6} xs={12} key={key} className="mb-4 pb-2">
                <Card className="blog rounded border-0 shadow overflow-hidden">
                  <Row className="align-items-center g-0">
                    <Col md={6}>
                      <img
                        src={blog.image}
                        className="img-fluid"
                        alt="Landrick"
                      />
                      <div className="overlay bg-dark"></div>
                      <div className="author">
                        <small className="text-light user d-block">
                          <i className="uil uil-user"></i> {blog.autor}
                        </small>
                        <small className="text-light date">
                          <i className="uil uil-calendar-alt"></i> {blog.date}
                        </small>
                      </div>
                    </Col>

                    <Col md={6}>
                      <Card.Body className="content">
                        <h5>
                          <Link href="#" className="card-title title text-dark">
                            {blog.title}
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">{blog.desc}</p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section">
        <WorkProcess />
      </section>
      <section className="mb-5 d-flex align-items-center flex-column">
        <h3>Потрібна консультація?</h3>
        <div className="mt-4">
          <Link href="#" className="btn btn-primary">
            Записатися
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
