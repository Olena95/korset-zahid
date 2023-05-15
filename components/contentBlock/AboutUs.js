import React, { useState } from "react";
import Link from "next/link";

import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={6}>
            <div className="position-relative">
              <img
                src="/images/medical/about.jpg"
                className="rounded img-fluid mx-auto d-block shadow rounded"
                alt=""
              />
            </div>
          </Col>

          <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-lg-5">
              <h4 className="title mt-3 mb-4">Про нас</h4>
              <p className="text-muted para-desc">
                Ми виготовляємо корсети Шено з 2015 року. Шляхом 3D сканування,
                наші спеціліасти знімали заміри з пацієнтів та передавали на
                виробництво, яке знаходилось у Харкові. З початку
                повномасштабного вторгнення підприємство «ОРТОСПАЙН» припинило
                свою діяльність, а працівники змушені були покинути рідне місто
                та переїхали до Львова. Об&apos;єднавши зусилля, ми створили
                компанію виробництва корсетів для лікування сколіозу у Львові.
              </p>
              <p className="text-muted para-desc mb-0">
                Сьогодні наша компанія допомагає дітям покращити та відновити
                функції хребта. Оскільки кожен пацієнт унікальний, неможливо
                купити готовий Корсет Шено. Ми виготовляємо його лише за
                індивідуальним замовленям із термопластичних матеріалів за
                результатами рентгена, 3D-сканування тіла пацієнта або
                індивідуальним гіпсовим зліпком.
              </p>

              <div className="mt-4">
                <Link href="/methodology" className="btn btn-primary">
                  Про методику
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default AboutUs;
