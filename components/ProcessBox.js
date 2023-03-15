import React, { Component } from "react";
import Link from "next/link";
import { Col, Card, CardBody } from "react-bootstrap";

const ProcessBox = ({ processes }) => {
  let length = processes.length;
  return (
    <React.Fragment>
      {processes.map((process, key) => (
        <Col md="6" className="mt-4 pt-2" key={key}>
          <Card className="work-process border-0 rounded shadow">
            <Card.Body>
              <h4 className="title">{process.title}</h4>
              <p className="text-muted para">{process.desc}</p>

              <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                <li className="step h1 mb-0 fw-bold">Фактор {key + 1}.</li>
                <li className="step-icon">
                  <i
                    className={
                      key + 1 === length
                        ? "mdi mdi-check-all mdi-36px"
                        : "mdi mdi-chevron-double-right mdi-36px"
                    }
                  ></i>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default ProcessBox;
