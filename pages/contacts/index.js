import React from "react";
import Link from "next/link";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Contacts = () => {
  return (
    <>
      <section className="section pt-5 ">
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={5}
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <Card className="custom-form rounded shadow border-0">
                <Card.Body>
                  <h4 className="mb-4">Замовити консультацію</h4>
                  <Form method="post" name="contact-form" id="contact-form">
                    <Row>
                      <Col lg={6}>
                        <Form.Group>
                          <div className="mb-3">
                            <Form.Label className="form-label">
                              Ваше ім'я <span className="text-danger">*</span>
                            </Form.Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Form.Control
                              name="name"
                              id="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder="Ім'я:"
                              required
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col lg={6}>
                        <Form.Group>
                          <div className="mb-3">
                            <Form.Label className="form-label">
                              Ваш Email <span className="text-danger">*</span>
                            </Form.Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Form.Control
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email:"
                              required
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col lg={12}>
                        <Form.Group>
                          <div className="mb-3">
                            <Form.Label className="form-label">
                              Повідомлення
                            </Form.Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Повідомлення:"
                            ></textarea>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" className="text-center">
                        <div className="d-grid">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary btn-block"
                            value="Надіслати повідомлення"
                          />
                        </div>
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
              <div className="title-heading ms-lg-4">
                <h4 className="mb-4">Контактна інформація</h4>
                <p className="text-muted">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
                <div className="d-flex contact-detail align-items-center mt-3">
                  <div className="icon">
                    <i>
                      <FeatherIcon
                        icon="mail"
                        className="fea icon-m-md text-dark me-3"
                      />
                    </i>
                  </div>
                  <div className="flex-1 content">
                    <h6 className="title fw-bold mb-0">Email</h6>
                    <Link href="#" className="text-primary ">
                      contact@example.com
                    </Link>
                  </div>
                </div>

                <div className="d-flex contact-detail align-items-center mt-3">
                  <div className="icon">
                    <i>
                      <FeatherIcon
                        icon="phone"
                        className="fea icon-m-md text-dark me-3"
                      />
                    </i>
                  </div>
                  <div className="flex-1 content">
                    <h6 className="title fw-bold mb-0">Телефон</h6>
                    <Link href="#" className="text-primary ">
                      +152 534-468-854
                    </Link>
                  </div>
                </div>

                <div className="d-flex contact-detail align-items-center mt-3">
                  <div className="icon">
                    <i>
                      <FeatherIcon
                        icon="map-pin"
                        className="fea icon-m-md text-dark me-3"
                      />
                    </i>
                  </div>
                  <div className="flex-1 content">
                    <h6 className="title fw-bold mb-0">Адреса</h6>
                    <Link href="#" className="video-play-icon  text-primary">
                      View on Google map
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacts;
