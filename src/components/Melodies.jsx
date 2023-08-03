import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import earth from "../assets/imgs/png/earth_bg.png";
import music_icon from "../assets/imgs/png/music_icon.png";
import music_icon_2 from "../assets/imgs/png/music_icon_2.png";

function Melodies() {
  return (
    <>
      <section className=" py-5">
        <Container>
          <Row className=" justify-content-between align-items-center">
            <Col xl={2}>
              <img
                className=" w-100 d-none d-xl-flex "
                src={music_icon}
                alt="music_icon"
              />
            </Col>
            <Col xl={7}>
              <div className="text-lg-center d-lg-flex justify-content-center flex-column align-items-center">
                <h2 className=" ff_syne fw_800 fs_md text-white text-capitalize mx_760 ">
                  The warm melodies of a favorite song can refresh the mind and
                  soothe the soul.
                </h2>
                <p className=" text_color ff_lato fw-semibold fs_xsm mb-0 mt-4 mx_760">
                  When your thoughts shape into innovations, do you take the
                  time to lend an ear?{" "}
                </p>
                <p className=" text_color ff_lato fw-semibold fs_xsm mb-0 mt-4 mx_760">
                  Lisa founded Friends of the Metaverse to bring inspired
                  innovators and leaders together in a dynamic community that
                  does.
                </p>
                <p className=" text_color ff_lato fw-semibold fs_xsm mb-0 mt-2 mx_760">
                  Leading 20+ years of immersed experience within the
                  technology, hospitality, and startup world, Lisa is now
                  composing a network of exceptional tech leaders and digital
                  architects to build out the Web3 and Metaverse space in
                  harmony.
                </p>
                <p className=" text_color ff_lato fw-semibold fs_xsm mb-0 mt-2 mx_760">
                  Like the upbeat, familiar tunes that inspire your best
                  creativity, Friends of the Metaverse is a creative venue that
                  fosters collaboration and productivity in one. Digitally host
                  roundtable conversations and brainstorm new opportunities with
                  zest!
                </p>
                <p className=" text_color ff_lato fw-semibold fs_xsm mb-0 mt-3 mx_760">
                  Join our Friends of the Metaverse® community, and tune into
                  your best ideas!
                </p>
                <a
                  href="#"
                  className=" main_btn ff_lato fw_800 mt-4 fs_xsm text-decoration-none d-inline-block"
                >
                  JOIN NOW
                </a>
              </div>
            </Col>
            <Col xl={2}>
              <img
                className=" w-100 d-none d-xl-flex"
                src={music_icon_2}
                alt="music_icon"
              />
            </Col>
          </Row>
        </Container>
        <div>
          {" "}
          <img className=" w-100 " src={earth} alt="earth" />
        </div>
      </section>
    </>
  );
}

export default Melodies;
