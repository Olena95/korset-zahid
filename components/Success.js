// React Basic and Bootstrap
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Button,
  Input,
  Form,
} from "react-bootstrap";
import Link from "next/link";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "./SectionTitle";
import ProcessBox from "./ProcessBox";

const Success = () => {
  const studioProcessesData = [
    {
      id: 1,
      title: "Сучасна професійна діагностика",
      desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      link: "#",
    },
    {
      id: 2,
      title: "Правильність призначення та конструкція виготовлення корсета",
      desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      link: "#",
    },
    {
      id: 3,
      title: "Регулярні курси лікувальної гімнастики та масажу",
      desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      link: "#",
    },
    {
      id: 4,
      title: "Динамічне спостереження",
      desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      link: "#",
    },
  ];

  const [modal, setModal] = useState(false);
  function tog_modal() {
    setModal(!modal);
  }

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          {/* section title */}
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Фактори успіху</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* process box */}
            <ProcessBox processes={studioProcessesData} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Success;
