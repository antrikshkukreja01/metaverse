import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <>
      <section className=" py-5 position-relative overflow-hidden">
        <span className="orange_shadow position-absolute translate-middle top-50 w-25  d-none d-lg-flex "></span>
        <span className=" purple_shadow position-absolute translate-middle top-50 start-100 w-25  d-none d-lg-flex  "></span>
        <Container>
          <div className="text-center mb-5">
            <h2 className=" ff_syne fw_800 fs_md text-white">FAQs</h2>
          </div>
          <Row className=" justify-content-center">
            <Col lg={7}>
              <Accordion defaultActiveKey={["0"]}>
                <Accordion.Item eventKey="0" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      When does Friends of the Metaverse launch?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      June xx, 2022
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      Where will Friends of the Metaverse Founding Member NFT be{" "}
                      <br />
                      available to purchase?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      How much is the mint price?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      On which network do Friends of the Metaverse Founding
                      Member <br /> NFT reside?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      How many Friends of the Metaverse Founding Member NFT will
                      be <br /> available?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      Are any tokens withheld from the Sale?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      What do I do after I purchase a Friends of the Metaverse
                      NFT?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className=" mb-2 ">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato fw_900 fs_xsm text_lighter_gray">
                      What can I do with a Friends of the Metaverse NFT?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_lato fs_xsm fw-semibold text_light_gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;
