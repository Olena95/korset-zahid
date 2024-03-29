import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Section = () => {
  return (
    <React.Fragment>
      <section className="bg-half-70 d-table w-100 home-wrapper overflow-hidden">
        <Container>
          <Row className="mt-5 align-items-center">
            <Col lg={5} md={5}>
              <div className="title-heading">
                <h4 className="heading my-3">
                  Нашим дітям -
                  <span className="text-primary"> здорові спини!</span>
                </h4>
                <p className="para-desc text-muted mb-0">
                  Єдиним доведеним консервативним методом лікування сколіозу є
                  носіння корсета Шено. Основна функція корсета - запобігання
                  подальшому прогресуванню деформації хребта.
                </p>

                <div className="mt-3">
                  <Link href="/contacts" className="btn btn-primary me-2 mt-2">
                    Замовити консультацію
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="ms-lg-4">
                <Image
                  src="/images/x-ray-photo.jpg"
                  className="rounded img-fluid mx-auto d-block shadow rounded"
                  alt="1111"
                  width={1200}
                  height={800}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Section;
