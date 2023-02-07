import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
  FormFeedback,
} from "react-bootstrap";

const Appointment = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <section className="section bg-light">
        <Container>
          <Row>
            {/* <Col lg={3} md={6} xs={12}>
              <Card className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-newspaper"></i>
                </span>
                <Card.Body className="p-0 content">
                  <h5>Appointment</h5>
                  <p className="para text-muted mb-0">
                    It is a long established fact that a reader layout.
                  </p>

                  <Link
                    href="#"
                    className="btn btn-pills btn-soft-success mt-4"
                  >
                    Request
                  </Link>
                </Card.Body>
              </Card>
            </Col> */}

            <Col lg={4} md={4} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-clock"></i>
                </span>
                <div className="card-body p-0 content">
                  <h5>Години роботи</h5>
                  <p className="mb-0">Понеділок - П&apos;ятниця</p>
                  <p className="para text-muted">9:00 - 16:00</p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Card className="features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-user-md"></i>
                </span>
                <Card.Body className="p-0 content">
                  <h5>Адреса</h5>

                  <p className="para text-muted mb-0">
                    вулиця Львівська, 2а, Бірки,
                    <br /> Львівська область, 81092
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={4} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Card className="features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-map-marker"></i>
                </span>
                <Card.Body className="p-0 content">
                  <h5>Знайти на карті</h5>
                  <p className="para text-muted mb-0">
                    Натисніть, щоб побачити наше розташування на карті
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Appointment;
