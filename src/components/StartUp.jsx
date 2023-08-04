import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import startup_1 from "../assets/imgs/png/startup_1.png";
import startup_2 from "../assets/imgs/png/startup_2.png";

function StartUp() {
  return (
    <>
      <section className="py-5">
        <Container className="position-relative z-4 container_custom">
          <Row>
            <Col md={6}>
              <img className="w-100" src={startup_1} alt="startup_1" />
              <h2 className="ff_syne fw_800 fs_sm text-white my-3">
                Startup-Investor Matching
              </h2>
              <p className="ff_lato fw-normal fs_xsm text_color mb-0">
                We are driven by startups and people who are making a difference
                in the world. We are dedicated to helping startups grow and
                offer this initiative to all startups and investors. Non-members
                are welcome to participate!
              </p>
              <button
                href="#"
                className="learn_btn ff_lato fw_800 mt-4 fs_xsm text-decoration-none"
              >
                LEARN MORE
              </button>
            </Col>
            <Col className="mt-5 mt-md-0" md={6}>
              <img className="w-100" src={startup_2} alt="startup_2" />
              <h2 className="ff_syne fw_800 fs_sm text-white my-3">
                Co-Founder Matching
              </h2>
              <p className="ff_lato fw-normal fs_xsm text_color mb-0">
                We offer this initiative to help entrepreneurs get started. Not
                a member? Not a problem! This initiative is open to everyone.
              </p>
              <button
                href="#"
                className="learn_btn ff_lato fw_800 mt-4 fs_xsm text-decoration-none"
              >
                LEARN MORE
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default StartUp;
