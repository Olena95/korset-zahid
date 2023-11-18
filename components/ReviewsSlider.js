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
        // centerMode: true,
        // centerPadding: "30",
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
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
                                        <div
                                            key={review.id}
                                            className="d-flex client-testi justify-content-center"
                                            name="clientsreview"
                                        >
                                            <div className="flex-1 content p-3 m-4 shadow rounded bg-white position-relative">
                                                <p className="text-muted mt-2">
                                                    &quot; {review.desc} &quot;
                                                </p>
                                                <h6 className="text-primary">
                                                    - {review.name}{" "}
                                                </h6>
                                            </div>
                                        </div>
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
