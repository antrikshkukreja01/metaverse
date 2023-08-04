import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Story() {
  return (
    <>
      <section className="py-5 position-relative">
        <span className="orange_shadow position-absolute start-0 top-50 translate-middle"></span>

        <Container className="position-relative z-2 container_custom">
          <Row>
            <Col lg={4}>
              <p className="ff_syne fw_800 text-capitalize text-white fs_md">
                Story
              </p>
            </Col>
            <Col lg={8}>
              <p className="ff_lato fw-semibold  text_color fs_xsm  mx_750 mb-2">
                In the thriving landscape of the Metaverse, ideas blossom beyond
                the flowered whimsical creations of budding artists and fruitful
                designers.
              </p>
              <p className="ff_lato fw-semibold  text_color fs_xsm  mx_750 mb-2">
                In the heart of innovation, the Friends of the Metaverse gather
                where refreshing blueprints and technology intersect, in good
                faith and good company.
                <p className="ff_lato fw-semibold  text_color fs_xsm  mx_750 mb-2"></p>
                Beyond beige round tables and traditional conference rooms,
                imagine nurturing seed start-ups in the company of Dubai’s Burj
                Khalifa Lake, brainstorming the future of product development as
                you peer through the views of the Eiffle Tower, and shake hands
                with a warm community of top-performing tech leaders, think
                tanks, and trailblazers in Web3.
              </p>
              <p className="ff_lato fw-semibold  text_color fs_xsm  mx_750 mb-2">
                Say hello to your Friends of the Metaverse. We are so excited to
                welcome you in our supportive and thriving collective.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Story;
