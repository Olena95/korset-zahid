import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const SectionTitle = ({ title, desc }) => {
  return (
    <React.Fragment>
      <Row className="justify-content-center pt-0">
        <Col className="col-12 text-center">
          <div className="section-title mb-4 pb-2">
            <h4 className="title mb-4"> {title}</h4>
            <p className="text-muted para-desc mb-0" name="sectiondesc">
              {desc}
            </p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SectionTitle;
