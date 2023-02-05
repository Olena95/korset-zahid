import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [isBorderLine, setIsBorderLine] = useState();
  const [isLight, setIsLight] = useState(false);
  const data = {
    grid1: [
      { title: "Про нас", link: "#" },
      { title: "Методологі", link: "#" },
      { title: "Послуги", link: "#" },
      { title: "Контакти", link: "#" },
    ],
    // grid2: [
    //   { title: "Terms of Services", link: "#" },
    //   { title: "Privacy Policy", link: "#" },
    // ],
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div
                className={
                  isBorderLine ? "footer-py-60 footer-border" : "footer-py-60"
                }
              >
                <div className="row  d-flex justify-content-between">
                  <div className="col-12 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
                    <Link href="#" className="logo-footer"></Link>
                    <p className={isLight ? "mt-4 text-muted" : "mt-4"}>
                      Start working with Landrick that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                    <ul
                      className={
                        isLight
                          ? "list-unstyled social-icon social mb-0 m t-4"
                          : "list-unstyled social-icon foot-social-icon mb-0 mt-4"
                      }
                    >
                      <li className="list-inline-item me-1">
                        <Link href="#" className="rounded">
                          <Image
                            src="/images/social-media/facebook.png"
                            className="avatar avatar-small rounded"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link href="#" className="rounded">
                          <Image
                            src="/images/social-media/instagram.png"
                            className="avatar avatar-small rounded"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link href="#" className="rounded">
                          <Image
                            src="/images/social-media/telegram.png"
                            className="avatar avatar-small rounded"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link href="#" className="rounded">
                          <Image
                            src="/images/social-media/linkedin.png"
                            className="avatar avatar-small rounded"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 col-lg-4 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5
                      className={
                        isLight
                          ? "text-dark footer-head"
                          : "text-light footer-head"
                      }
                    >
                      Корсет-захід
                    </h5>
                    <ul className="list-unstyled footer-list mt-4">
                      {data.grid1.map((grid, key) => (
                        <li key={key}>
                          <Link
                            href={grid.link}
                            className={
                              isLight
                                ? "text-muted text-decoration-none"
                                : "text-foot text-decoration-none"
                            }
                          >
                            {grid.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="col-12 col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5
                      className={
                        isLight
                          ? "text-dark footer-head"
                          : "text-light footer-head"
                      }
                    >
                      Корисні посилання
                    </h5>
                    <ul className="list-unstyled footer-list mt-4">
                      {data.grid2.map((grid, key) => (
                        <li key={key}>
                          <Link
                            href={grid.link}
                            className={
                              isLight
                                ? "text-muted text-decoration-none "
                                : "text-foot text-decoration-none"
                            }
                          >
                            {grid.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Landrick. Design with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by{" "}
                    <Link
                      href="https://themesbrand.in/"
                      target="_blank"
                      className="text-reset text-decoration-none"
                      rel="noopener noreferrer"
                    >
                      Themesbrand
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
