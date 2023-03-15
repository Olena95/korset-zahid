import React from "react";
import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";

const WorkProcess = () => {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">Як ми працюємо?</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Замовлення корсета відбувається за попереднім телефонним записом
                при наявності рентген знімків (прямої та бокової проекціях).
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mt-4 pt-2">
            <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <div>
                  <Image
                    src="/images/icons/user-group.svg"
                    width={35}
                    height={35}
                    alt="user"
                    className="icons-image"
                  />
                </div>
              </div>

              <Card.Body>
                <h5 className="text-dark">Зустріч з пацієнтом</h5>
                <p className="text-muted mb-0">
                  Зустріч відбувається на конкретно домовлену годину.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
            <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <div>
                  <Image
                    src="/images/icons/ruler.svg"
                    width={35}
                    height={35}
                    alt="user"
                    className="icons-image"
                  />
                </div>
              </div>

              <Card.Body>
                <h5 className="text-dark">Зняття замірів</h5>
                <p className="text-muted mb-0">
                  Заміри ми отримуємо за результатами рентгена, 3D-сканування
                  тіла пацієнта або індивідуальним гіпсовим зліпком.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
            <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <div>
                  <Image
                    src="/images/icons/done.svg"
                    width={35}
                    height={35}
                    alt="user"
                    className="icons-image"
                  />
                </div>
              </div>

              <Card.Body>
                <h5 className="text-dark">Виготвлення корсету</h5>
                <p className="text-muted mb-0">
                  Виготовляємо його лише за індивідуальним замовленям із
                  термопластичних матеріалів
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default WorkProcess;
