import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ReviewsSlider = ({ reviews }) => {
  const [cols, setCols] = useState(6);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  // const updateWindowSize = () => {
  //   if (window.outerWidth >= 1230) {
  //     setCols({ itemCount: 2, cols: 6 });
  //   } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
  //     setCols({ itemCount: 2, cols: 12 });
  //   } else if (window.outerWidth <= 970) {
  //     setCols({ itemCount: 2, cols: 12 });
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowSize);
  // }, []);

  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg="12" className="mt-4">
          <div id="customer-testi" className="tiny-three-item">
            <div className="tiny-slide">
              <Row>
                {step1 === true
                  ? reviews.map((review, key) =>
                      key >= 0 && key <= 1 ? (
                        <Col key={key} lg={6} md={12} className="mb-4">
                          <div
                            className="d-flex client-testi"
                            name="clientsreview"
                          >
                            <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                              <p className="text-muted mt-2">
                                &quot; {review.desc} &quot;
                              </p>
                              <h6 className="text-primary">- {review.name} </h6>
                            </div>
                          </div>
                        </Col>
                      ) : null
                    )
                  : reviews.map((review, key) =>
                      key >= 2 && key <= 5 ? (
                        <Col key={key} lg={6} md={12} className="mb-4">
                          <div
                            className="d-flex client-testi"
                            name="clientsreview"
                          >
                            <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                              <p className="text-muted mt-2">
                                &quot; {review.desc} &quot;
                              </p>
                              <h6 className="text-primary">
                                - {review.name}{" "}
                                <small className="text-muted">
                                  {review.post}
                                </small>
                              </h6>
                            </div>
                          </div>
                        </Col>
                      ) : null
                    )}
              </Row>
            </div>
          </div>
          <div className="tns-nav">
            <button
              type="button"
              onClick={() => {
                setStep1(true);
                setStep2(false);
              }}
              className={step1 ? "tns-nav-active" : "tns-nav-inactive"}
            ></button>
            <button
              type="button"
              onClick={() => {
                setStep1(false);
                setStep2(true);
              }}
              className={step2 ? "tns-nav-active" : "tns-nav-inactive"}
            ></button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ReviewsSlider;
