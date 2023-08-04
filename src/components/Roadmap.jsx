import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Roadmap() {
  return (
    <>
      <section className="py-5 position-relative">
        <span className="orange_shadow position-absolute start-0   d-none d-lg-flex"></span>
        <span className="purple_shadow position-absolute start-0 top-50 translate-middle"></span>

        <Container className="position-relative z-2 container_custom">
          <Row className="justify-content-between">
            <Col lg={5}>
              <h2 className="ff_syne fw_800 fs_md text-white">Roadmap</h2>
              <p className="text_gray ff_lato fw-semibold fs_xsm mb-0 mx_463">
                Friends of the Metaverse® is a long-term project that aims to
                build a community-driven ecosystem of business executives that
                empowers entrepreneurs and advance innovation. This project is
                the first to celebrate the next generation of tech leaders and
                entrepreneurs within the digital universe.
              </p>
            </Col>
            <Col className="mt-4" lg={6}>
              <div class="timeline d-flex justify-content-start">
                <section class="timeline">
                  <ul className="ps-0">
                    <li>
                      <div class="content">
                        <article className="mb-4 ms-xl-4">
                          <h2 className="ff_syne fw_800 fs_sm mx_509 text-white">
                            Welcome to Friends of the Metaverse
                          </h2>
                          <p className="text_gray ff_lato fw-semibold fs_xsm mb-0 mx_463">
                            We continue to collaborate with the best advisors to
                            build and grow the Friends of the Metaverse
                            community as we launch our Friends of the Metaverse
                            Founding Member NFT that will allow access to our
                            private network of 1,000 collectors.
                          </p>
                        </article>
                      </div>
                    </li>
                    <li>
                      <div class="content">
                        <article className="mb-4 ms-xl-4">
                          <h2 className="ff_syne fw_800 fs_sm mx_509 text-white">
                            NFT Collection by Friends of the Metaverse
                          </h2>
                          <p className="text_gray ff_lato fw-semibold fs_xsm mb-0 mx_463">
                            We will launch our first 10k collection in Q3 2022.
                            The funds raised from the full mint will be used
                            towards fulfilling our Roadmap offerings in our next
                            phases.
                          </p>
                        </article>
                      </div>
                    </li>
                    <li>
                      <div class="content">
                        <article className="mb-4 ms-xl-4">
                          <h2 className="ff_syne fw_800 fs_sm mx_509 text-white">
                            Rewards and Marketplace
                          </h2>
                          <p className="text_gray ff_lato fw-semibold fs_xsm mb-0 mx_463">
                            Holders of the Friends of the Metaverse NFTs will be
                            able to earn points for holding their NFTs. Points
                            can be spent within our ecosystem in the Friends of
                            the Metaverse Marketplace. The Marketplace will
                            contain whitelist spots, experiences, and perks.
                          </p>
                        </article>
                      </div>
                    </li>
                    <li>
                      <div class="content">
                        <article className="mb-4 ms-xl-4">
                          <h2 className="ff_syne fw_800 fs_sm mx_509 text-white">
                            Long-Term Plans
                          </h2>
                          <p className="text_gray ff_lato fw-semibold fs_xsm mb-0 mx_463">
                            Expect more unique NFT collections by Friends of the
                            Metaverse that will allow collectors to access
                            exclusive experiences and perks within our
                            ecosystem.
                          </p>
                        </article>
                      </div>
                    </li>
                    <li>
                      <div class="content">
                        <article className="mb-4 ms-xl-4">
                          <h2 className="ff_syne fw_800 fs_sm mx_509 text-white">
                            We’re just getting started…stay tuned!
                          </h2>
                        </article>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Roadmap;
