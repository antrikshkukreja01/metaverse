import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/imgs/png/footer_logo.png";
import insta from "../assets/imgs/png/instagram_icon.png";
import discord from "../assets/imgs/png/discord_icon.png";
import linkdin from "../assets/imgs/png/linkdin_icon.png";
import youtube from "../assets/imgs/png/youtube_icon.png";
import twiter from "../assets/imgs/png/twiter_icon.png";

function Footer() {
  return (
    <>
      <section className="bg_footer py-5 position-relative overflow-hidden  ">
        <span className="orange_shadow position-absolute pos_shadow_footer_orange "></span>
        <span className=" purple_shadow position-absolute pos_shadow_footer_purple   "></span>
        <Container className=" position-relative z-2">
          <Row className=" align-items-center justify-content-between">
            <Col lg={4}>
              <a href="#">
                <img className=" footer_logo_size" src={logo} alt="logo" />
              </a>
              <p className=" ff_lato fw-normal fs_xsm text_light_gray mb-0 mt-3">
                FRIENDS OF THE METAVERSE is a registered trademark and may not
                be used without permission.
              </p>
              <div className=" d-flex align-items-center gap-3 mt-4">
                <a href="#">
                  <img
                    className=" icon_width icon_hover "
                    src={insta}
                    alt="insta"
                  />
                </a>
                <a href="#">
                  <img
                    className=" icon_width icon_hover "
                    src={discord}
                    alt="discord"
                  />
                </a>
                <a href="#">
                  <img
                    className=" icon_width icon_hover "
                    src={linkdin}
                    alt="linkdin"
                  />
                </a>
                <a href="#">
                  <img
                    className=" icon_width icon_hover "
                    src={youtube}
                    alt="youtube"
                  />
                </a>
                <a href="#">
                  <img
                    className=" icon_width icon_hover "
                    src={twiter}
                    alt="twiter"
                  />
                </a>
              </div>
            </Col>
            <Col lg={6} className=" mt-4">
              <Row className=" align-items-center justify-content-lg-end">
                <Col className=" col-6" sm={5} xl={4}>
                  <a
                    className=" ff_lato fw-normal fs_xsm text_light_gray d-block text-decoration-none "
                    href="#"
                  >
                    Diversity and Inclusion
                  </a>
                  <a
                    className=" ff_lato fw-normal fs_xsm text_light_gray d-block text-decoration-none "
                    href="#"
                  >
                    Privacy Statement
                  </a>
                  <a
                    className=" ff_lato fw-normal fs_xsm text_light_gray text-decoration-none "
                    href="#"
                  >
                    Terms of Use
                  </a>
                </Col>
                <Col className=" col-6" sm={5} xl={4}>
                  <a
                    className=" ff_lato fw-normal fs_xsm text_light_gray d-block text-decoration-none "
                    href="#"
                  >
                    Blog
                  </a>
                  <a
                    className=" ff_lato fw-normal fs_xsm text_light_gray d-block text-decoration-none "
                    href="#"
                  >
                    Brand Partnerships
                  </a>
                  <a
                    className=" ff_lato fw-normal fs_xsm text_light_gray text-decoration-none "
                    href="#"
                  >
                    Contact
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className=" mt-5 text-center">
            <p className=" mb-0 ff_lato fw-normal fs_xsm text_light_gray">
              Copyright@2022, Friends of the Metaverse. Headquartered in Silicon
              Valley.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;
