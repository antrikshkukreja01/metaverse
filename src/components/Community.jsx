import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import card from "../assets/imgs/png/friends_blue_card.png";
import card_2 from "../assets/imgs/png/friends_white_card.png";

function Community() {
  window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".cards-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  };

  return (
    <>
      <section className="py-5">
        <Container className="container_custom">
          <Row className="align-items-center">
            <Col
              lg={6}
              className="mb-5 mb-lg-0 ps-sm-5 ps-xl-0 position-relative"
            >
              <span className="orange_shadow position-absolute top-0 start-0 d-none d-lg-flex"></span>
              <div class="cards-box w_70 ps-5  ms-sm-5 ms-lg-0">
                <div class="card hide">
                  <div class="content-placeholder">
                    <img className="w-100" src={card} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card_2} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card_2} alt="card" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="pt-5 pt-lg-0" lg={6}>
              <p className="mb-0 text-white ff_lato fw-bold fs_sm">
                Our Community
              </p>
              <h2 className="ff_syne fw_800 fs_md text-white mx_560">
                Friends of the Metaverse Founding Member NFT
              </h2>
              <p className="ff_lato fw-semibold  text_color fs_xsm  mx_750 mb-2">
                Bringing our vision to life, the first Friends of the Metaverse
                Founding Member NFT collection will be used to spark innovation,
                inspiration and motivation for the entire collective. The
                digital art consists of 41 icons that reflect the passion, grit
                and determinization of the entrepreneurial spirit. From
                diversity, integrity and determination to teamwork, character
                and perseverance, this NFT depicts what it means to be a tech
                leader.
              </p>
              <p className="ff_lato fw-semibold  text_color fs_xsm  mx_750 mb-2">
                Holders of the Friends of the Metaverse Founding Member NFT will
                receive all benefits within the Friends of the Metaverse
                community, including access to its private group of 1,000 NFT
                collectors and priority access to its upcoming 10k collection.
              </p>
              <button
                href="#"
                className="main_btn ff_lato fw_800 mt-4 d-inline-block fs_xsm text-decoration-none"
              >
                BUY ON OPENSEA
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Community;
