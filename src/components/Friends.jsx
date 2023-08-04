import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fire from "../assets/imgs/svg/fire_img.svg";
import earth from "../assets/imgs/svg/earth_img.svg";
import employ from "../assets/imgs/svg/employ_img.svg";
import lock from "../assets/imgs/svg/lock_img.svg";

function Friends() {
  return (
    <>
      <section className="py-5 position-relative">
        <span className="orange_shadow position-absolute end-0 top-50 d-none d-md-flex"></span>
        <span className="purple_shadow position-absolute end-0 top-0 d-none d-md-flex"></span>

        <Container className="position-relative z-2 container_custom">
          <h2 className="ff_syne fw_800 fs_md text-white mb-4 mb-lg-0 mx_946">
            Friends of the Metaverse® is an NFT community-based project focused
            on connecting innovative executives in leadership.
          </h2>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <p className="text_color fw-normal fs_xsm ff_lato">
                We are a private network for the most powerful executive leaders
                from diverse background, industries, and organizations - from
                Fortune 500 companies to successful startups.
              </p>
              <p className="text_color fw-normal fs_xsm ff_lato mb-0">
                Our mission is to inspire the next generation of tech leaders.
                We realize this goal by bringing together talented
                entrepreneurs, innovative startups, industry professionals, and
                technology leaders dedicated to advancing the boundaries of
                technology. We are intensely focused on innovation and moving
                forward - working together, collaborating, networking, and
                learning from each other.
              </p>
              <p className="text_color fw-normal fs_xsm ff_lato mb-0">
                We are open to all who share a commitment to shaping and
                strengthening the social good of the Metaverse, offering a
                valuable opportunity to advance a positive global culture of
                tech in our community.
              </p>
            </Col>
            <Col lg={5}>
              <Row>
                <Col className="mt-3 mt-sm-5" sm={6}>
                  <div className="card_friends my-3">
                    <div className="text-center">
                      <img src={fire} alt="fire" />
                      <p className="ff_lato fw-semibold fs_xsm text_light_gray mb-0 mt-3">
                        Advance Innovation
                      </p>
                    </div>
                  </div>
                  <div className="card_friends mt-3">
                    <div className="text-center">
                      <img src={earth} alt="earth" />
                      <p className="ff_lato fw-semibold fs_xsm text_light_gray mb-0 mt-3">
                        Make a Global Impact
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="card_friends my-3">
                    <div className="text-center">
                      <img src={employ} alt="employ" />
                      <p className="ff_lato fw-semibold fs_xsm text_light_gray mb-0 mt-3">
                        Foster Collaboration
                      </p>
                    </div>
                  </div>
                  <div className="card_friends my-3">
                    <div className="text-center">
                      <img src={lock} alt="lock" />
                      <p className="ff_lato fw-semibold fs_xsm text_light_gray mb-0 mt-3">
                        Safeguard Metaverse <br /> Worlds
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Friends;
