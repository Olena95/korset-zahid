import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSlider = ({ reviews }) => {
    const [cols, setCols] = useState(6);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 1,
                    arrows: false, // Встановіть стрілки в false, щоб вони зникали
                },
            },
        ],
    };

    return (
        <React.Fragment>
            <Row className="justify-content-center mb-4">
                <Col lg="12" className="mt-4">
                    <div id="customer-testi" className="tiny-three-item">
                        <div className="tiny-slide">
                            <Row>
                                <Slider {...settings}>
                                    {reviews.map((review) => (
                                        <Col
                                            key={review.id}
                                            lg={3}
                                            md={12}
                                            className="mb-4"
                                        >
                                            <div
                                                className="d-flex justify-content-center  client-testi"
                                                name="clientsreview"
                                            >
                                                <div className="flex-1 content p-3 m-4 shadow rounded bg-white position-relative">
                                                    <p className="text-muted mt-2">
                                                        &quot; {review.desc}{" "}
                                                        &quot;
                                                    </p>
                                                    <h6 className="text-primary">
                                                        - {review.name}{" "}
                                                    </h6>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Slider>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ReviewsSlider;
