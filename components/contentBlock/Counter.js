import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

const Counter = () => {
  const counters = [
    {
      title: "Позитивних відгуків",
      end: 99.0,
      postFix: ".00%",
      desc: "від пацієнтів",
    },
    {
      title: "Досвіду",
      end: 25,
      postFix: "+",
      desc: "від кваліфікованих працівників",
    },
    {
      title: "Успішно створених корсетів",
      end: 1100,
      postFix: "+",
      desc: "для дітей різного віку",
    },
  ];
  return (
    <React.Fragment>
      <section className="section pt-0">
        <Container>
          <div className="position-relative" style={{ zIndex: "1" }}>
            <div className="rounded shadow bg-white p-4">
              <Row id="counter">
                {counters.map((counter, key) => (
                  <Col md={4} key={key}>
                    <div className="counter-box text-center">
                      <h1 className="mb-0 mt-3">
                        <span className="counter-value">
                          <CountUp end={counter.end} duration={8} />
                        </span>
                        {counter.postFix}
                      </h1>
                      <h5 className="counter-head mb-1">{counter.title}</h5>
                      <p className="text-muted mb-0">{counter.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Counter;
