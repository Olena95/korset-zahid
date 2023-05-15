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
                Тут ви знайдете короткий опис наших послуг. Для отримання більш
                детальної інформації - зв’яжіться з нашим консультантом.
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
                    src="/images/x-ray-photo.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Діагностика</h5>
                    <p className="text-muted my-3">
                      З багаторічного досвіду можемо сказати, що здебільшого
                      пацієнти звертаються до нас після хірургічного обстеження
                      з готовим направленням на корсет Шено. Далі беруться до
                      роботи наші фахівці: проводять сканування тіла за
                      допомогою 3D-сканера...
                    </p>
                    <Link href="/services" className="text-primary">
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
                    src="/images/doctor.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Лікування</h5>
                    <p className="text-muted my-3">
                      Сьогодні основними факторами успіху консервативного
                      лікування сколіозу є: вчасна діагностика, правильність
                      призначення та конструкція виготовлення корсета...
                    </p>
                    <Link href="/services" className="text-primary">
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
                    src="/images/company/about3.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Виготовлення</h5>
                    <p className="text-muted my-3">
                      Ми виготовляємо корсет Шено у Львові лише за
                      індивідуальним замовленням із термопластичних
                      матеріалів...
                    </p>
                    <Link href="/services" className="text-primary">
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
                    src="/images/doctor2.jpg"
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5>Консультація</h5>
                    <p className="text-muted my-3">
                      Пацієнт обов&apos;язково повинен мати при собі рентген
                      знімки у прямій та боковій проекціях. Наші фахівці
                      методом...
                    </p>
                    <Link href="/services" className="text-primary">
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
              </TabContent>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </React.Fragment>
  );
};

export default Services;
