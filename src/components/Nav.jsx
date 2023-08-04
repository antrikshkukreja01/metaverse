import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/imgs/png/icon.png";
import insta from "../assets/imgs/png/instagram_icon.png";
import discord from "../assets/imgs/png/discord_icon.png";
import linkdin from "../assets/imgs/png/linkdin_icon.png";
import youtube from "../assets/imgs/png/youtube_icon.png";
import twiter from "../assets/imgs/png/twiter_icon.png";

function Nav() {
  return (
    <>
      <nav className="py-4 position-relative z-2">
        <Container className="container_custom">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <img className="w_50" src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="#">
                <img
                  className="icon_width icon_hover"
                  src={insta}
                  alt="insta"
                />
              </a>
              <a href="#">
                <img
                  className="icon_width icon_hover"
                  src={discord}
                  alt="discord"
                />
              </a>
              <a href="#">
                <img
                  className="icon_width icon_hover"
                  src={linkdin}
                  alt="linkdin"
                />
              </a>
              <a href="#">
                <img
                  className="icon_width icon_hover"
                  src={youtube}
                  alt="youtube"
                />
              </a>
              <a href="#">
                <img
                  className="icon_width icon_hover"
                  src={twiter}
                  alt="twiter"
                />
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Nav;
