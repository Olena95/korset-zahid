import React, { Component, useState } from "react";
import {
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  Tab,
  TabContent,
  TabPane,
} from "react-bootstrap";
import classnames from "classnames";
import Link from "next/link";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        <Row className="align-items-end mb-4 pb-2">
          <Col md={8}>
            <div className="section-title text-center text-md-start">
              <h4 className="title mb-4">Наші послуги</h4>
              <p className="text-muted mb-0 para-desc">
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </Col>
        </Row>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col md={4} className="mt-4 pt-2">
              <ul
                className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar"
                id="pills-tab"
                role="tablist"
              >
                <Nav.Item>
                  <NavLink
                    href="#"
                    eventKey="first"
                    className={`rounded ${activeTab === 1 ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(1);
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Діагностика</h6>
                    </div>
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="mt-2">
                  <NavLink
                    href="#"
                    eventKey="second"
                    className={`rounded ${activeTab === 2 ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(2);
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Лікування</h6>
                    </div>
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="mt-2">
                  <NavLink
                    href="#"
                    eventKey="third"
                    className={`rounded ${activeTab === 3 ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(3);
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Виготовлення</h6>
                    </div>
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="mt-2">
                  <NavLink
                    href="#"
                    eventKey="four"
                    className={`rounded ${activeTab === 4 ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(4);
                    }}
                  >
                    <div className="text-start py-1 px-2">
                      <h6 className="mb-0">Консультація</h6>
                    </div>
                  </NavLink>
                </Nav.Item>
              </ul>
            </Col>

            <Col md={8} xs={12} className="mt-4 pt-2">
              <TabContent id="pills-tabContent">
                <TabPane
                  className="fade show bg-white  p-4 rounded shadow"
                  tabId="1"
                  eventKey="first"
                >
                  <img
                    src="/images/medical/dental.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Діагностика</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as &apos;fill
                      text&apos;. It is said that song composers of the past
                      used dummy texts as lyrics.
                    </p>
                    <Link href="#" className="text-primary">
                      Читати більше
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="2"
                  eventKey="second"
                >
                  <img
                    src="/images/medical/cardio.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Лікування</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as &apos;fill
                      text&apos;. It is said that song composers of the past
                      used dummy texts as lyrics.
                    </p>
                    <Link href="#" className="text-primary">
                      Читати більше
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="3"
                  eventKey="third"
                >
                  <img
                    src="/images/medical/eyecare.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Виготовлення</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as &apos;fill
                      text&apos;. It is said that song composers of the past
                      used dummy texts as lyrics.
                    </p>
                    <Link href="#" className="text-primary">
                      Читати більше
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="4"
                  eventKey="four"
                >
                  <img
                    src="/images/medical/general.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Консультація</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as &apos;fill
                      text&apos;. It is said that song composers of the past
                      used dummy texts as lyrics.
                    </p>
                    <Link href="#" className="text-primary">
                      Читати більше
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="5"
                  eventKey="five"
                >
                  <img
                    src="/images/medical/medicine.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Medicine Services</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as &apos;fill
                      text&apos;. It is said that song composers of the past
                      used dummy texts as lyrics.
                    </p>
                    <Link href="#" className="text-primary">
                      Learn More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade show bg-white p-4 rounded shadow"
                  tabId="6"
                  eventKey="six"
                >
                  <img
                    src="/images/medical/orthopedic.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Orthopadic Service</h5>
                    <p className="text-muted my-3">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as &apos;fill
                      text&apos;. It is said that song composers of the past
                      used dummy texts as lyrics.
                    </p>
                    <Link href="#" className="text-primary">
                      Learn More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </React.Fragment>
  );
};

export default Services;
