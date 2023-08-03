import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Subscribe() {
  return (
    <>
      <section className=" py-5 bg_linear">
        <Container>
          <Row className=" justify-content-center">
            <Col md={9}>
              <div className="linear_box">
                <Row className=" align-items-center">
                  <Col xl={6}>
                    <h2 className=" text-capitalize ff_syne fw_800 fs_sm text-white text_shadow">
                      Subscribe to our Newsletter
                    </h2>
                    <p className=" ff_lato fw-semibold fs_xsm text-white mb-0">
                      You won’t want to miss the next big thing.
                    </p>
                  </Col>
                  <Col xl={6}>
                    <div className=" d-flex align-items-center flex-column flex-sm-row gap-3 mt-4 mt-xl-0">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className=" ff_lato fw-normal fs_xsm input "
                      />
                      <a
                        href="#"
                        className=" main_btn ff_lato fw_800  fs_xsm nowrap text-decoration-none"
                      >
                        JOIN NOW
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Subscribe;
