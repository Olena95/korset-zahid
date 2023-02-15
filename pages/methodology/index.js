import React from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import {
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  Tab,
  TabContent,
  TabPane,
} from "react-bootstrap";
import CountUp from "react-countup";
import classnames from "classnames";

import WorkProcess from "@/components/WorkProcess";
import Success from "@/components/Success";

const Methodology = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <section
        className="bg-half-170 methodology-header"
        style={{ background: `url(/images/doctor.jpg)` }}
      >
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading title-heading">
                <h2 className="text-white title-dark"> Методологія </h2>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
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
          <Row className="align-items-center" id="counter">
            <Col md={6}>
              <img
                src="/images/company/about2.png"
                className="img-fluid"
                alt=""
              />
            </Col>

            <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="ms-lg-4">
                <div className="d-flex mb-4">
                  <span className="text-primary h1 mb-0">
                    <span className="counter-value display-1 fw-bold">
                      <CountUp start={0} end={15} duration={12} />
                    </span>
                    +
                  </span>
                  <span className="h5 align-self-end ms-2">
                    Років <br /> досвіду
                  </span>
                </div>
                <div className="section-title">
                  <h4 className="title mb-4">Про методику</h4>
                  <p className="text-muted">
                    Корсет Шено - ортопедичний корсет, застосовується для
                    виправлення та відновлення функцій хребта при його
                    захворюваннях (найчастіше при сколіозі). Корсет надає тиск
                    на опуклі рахунок деформації ділянки тіла, цим вирівнюючи і
                    наводячи в анатомічно правильне положение. Він є жорсткою
                    пластиковою гільзою. Усередині неї розташовані зони тиску,
                    протилежно яким розташовані зони розширення, представлені
                    отворами (камерами). У ці камери зміщуватимуться тканини в
                    потрібному напрямку в процесі корекції. Корсет застібається
                    за допомогою ременів (липучок).
                  </p>
                  <Link href="#" className="btn btn-primary mt-3">
                    Зв&apos;яжіться з нами
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bg-light">
        <Success />
        <Container className="mt-100 mt-60">
          <Row className="align-items-end mb-4 pb-4">
            <Col md={8}>
              <div className="section-title text-center text-md-start">
                <h4 className="title mb-4">Покази при захворюваннях</h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col md={4} className="mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                  <NavItem>
                    <NavLink
                      href="#"
                      eventKey="first"
                      className={`rounded ${activeTab === 1 ? "active" : ""}`}
                      onClick={() => {
                        setActiveTab(1);
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Сколіоз</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      href="#"
                      eventKey="two"
                      className={`rounded ${activeTab === 2 ? "active" : ""}`}
                      onClick={() => {
                        setActiveTab(2);
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Кіфоз</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </ul>
              </Col>

              <Col md={8} xs={12} className="mt-4 pt-2">
                <TabContent activeTab={activeTab}>
                  <TabPane
                    className="fade bg-white show p-4 rounded shadow"
                    tabId="1"
                    eventKey="first"
                  >
                    <img
                      src="/images/lordoz_0.jpg"
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Сколіо́з (англ. scoliosis, походить від грец. σκολιός —
                        «викривлення») — захворювання опорно-рухового апарата,
                        що характеризується викривленням хребта у фронтальній
                        (боковій) площині з розворотом хребців (торсія) навколо
                        своєї вертикальної осі. Процес формування сколіотичної
                        деформації — це результат взаємодії чинників, що
                        порушують вертикальне положення хребта, й
                        пристосувальних реакцій, спрямованих на збереження
                        вертикального положення.
                      </p>
                      <p className="text-muted">
                        Приблизно у 80 % усіх випадків причина виникнення
                        викривлень невідома. Сколіоз може починатися в
                        будь-якому віці. Найчастіше він зустрічається в період
                        швидкого зростання — у віці від 6 до 24 місяців, 5 — 8
                        років, 11 — 14 років життя. Зі збільшенням викривлення
                        зростає тенденція до погіршення проблем загального стану
                        здоров`&apos;`я. Сильні сколіози є причиною деформації
                        тулуба та його укорочення і призводять до зменшення
                        об`&apos;`єму грудної клітки і черевної порожнини.
                      </p>
                      <h5 className="text-muted">
                        Покази для корсетотерапії при сколіозі
                      </h5>
                      <ol className="text-muted">
                        <li>
                          Прогресування деформації більш чим на 5° за 6 місяців
                        </li>
                        <li>
                          Високий ризик прогресування:
                          <ul>
                            <li> діти та підлітки з тестом Ріссера 0-3</li>
                            <li> величина деформації 20-40°</li>
                            <li> торсія хребців більше 10°</li>
                            <li> низький індекс стабільності</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </TabPane>

                  <TabPane
                    className="fade bg-white p-4 show rounded shadow"
                    tabId="2"
                    eventKey="two"
                  >
                    <img
                      src="/images/kyphosis.jpg"
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Кіфоз (дав.-гр. κύφος зігнутий, горбатий) — в загальних
                        випадках являє собою викривлення верхнього відділу
                        хребта. Може бути як надбаним, так і спадковим. Один з
                        типів порушення постави людини; вигин назад у грудному
                        відділі — грудний кіфоз
                      </p>
                      <p className="text-muted">
                        Кіфоз, що виникає в грудному відділі хребта, клінічно
                        проявляється у вигляді синдрому «круглої спини»
                        (сутулість; у складніших випадках — горбатість). При
                        цьому положенні плечі пацієнта нахилені допереду і
                        донизу, грудна клітка звужується. Основний дихальний
                        м`&apos;`яз — діафрагма опускається донизу, м`&apos;`язи
                        черевного преса ослаблені, верхня частина тулуба
                        нахилена вперед.
                      </p>
                      <h5 className="text-muted">
                        Покази для корсетотерапії при кіфозі
                      </h5>

                      <ul className="text-muted">
                        <li> Грудний кіфоз більше 30° </li>
                        <li> Грудо поперековий кіфоз</li>
                        <li> Поперековий кіфоз </li>
                        <li> Наявність больового синдрому</li>
                        <li> Спондилолістез </li>
                      </ul>
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};
export default Methodology;
