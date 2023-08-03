import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import planet from "../assets/imgs/png/planet.png";

function Header() {
  return (
    <>
      <section className=" py-5 position-relative">
        <Container>
          <Row className=" justify-content-center">
            <Col md={10}>
              <p className="ff_lato text-center mb-0 fw-bold text-white fs_sm">
                Welcome to
              </p>
              <div className=" d-flex flex-column align-items-center justify-content-center">
                <h1 className=" text-center ff_syne fw_800 text-white fs_lg ">
                  Friends of <br /> the Metaverse
                </h1>
                <a
                  href="#"
                  className=" main_btn ff_lato fw_800 mt-4 fs_xsm text-decoration-none"
                >
                  BUY ON OPENSEA
                </a>
              </div>

              <div className=" d-flex justify-content-center mt-5">
                <img className=" w_planet_img" src={planet} alt="planet" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Header;
