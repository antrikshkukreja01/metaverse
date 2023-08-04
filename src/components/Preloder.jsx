import React, { useEffect, useState } from "react";
function Preloader() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 4500);
  }, []);
  {
    if (loader === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loader ? (
        <section className=" position-fixed w-100 min-vh-100 Loader overflow-hidden  bg-black  d-flex flex-column justify-content-center align-items-center position-relative ">
          <div class="pl">
            <svg
              class="pl__rings"
              viewBox="0 0 128 128"
              width="128px"
              height="128px"
            >
              <g fill="none" stroke-linecap="round" stroke-width="4">
                <g class="pl__ring" transform="rotate(0)">
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.3)"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.5)"
                    stroke-dasharray="50 240"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(223,90%,50%)"
                    stroke-dasharray="25 265"
                  />
                </g>
                <g class="pl__ring" transform="rotate(0)">
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0)"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.5)"
                    stroke-dasharray="50 240"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(223,90%,50%)"
                    stroke-dasharray="25 265"
                  />
                </g>
                <g class="pl__ring" transform="rotate(0)">
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0)"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.5)"
                    stroke-dasharray="50 240"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(223,90%,50%)"
                    stroke-dasharray="25 265"
                  />
                </g>
                <g class="pl__ring" transform="rotate(0)">
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0)"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.5)"
                    stroke-dasharray="50 240"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(223,90%,50%)"
                    stroke-dasharray="25 265"
                  />
                </g>
                <g class="pl__ring" transform="rotate(180)">
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.3)"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.5)"
                    stroke-dasharray="50 240"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(223,90%,50%)"
                    stroke-dasharray="25 265"
                  />
                </g>
                <g class="pl__ring" transform="rotate(180)">
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0)"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsla(223,90%,50%,0.5)"
                    stroke-dasharray="50 240"
                  />
                  <ellipse
                    class="pl__orbit"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(223,90%,50%)"
                    stroke-dasharray="25 265"
                  />
                </g>
                <g class="pl__ring" transform="rotate(0)">
                  <ellipse
                    class="pl__electron"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(0,0%,100%)"
                    stroke-dasharray="1 289"
                    stroke-width="8"
                  />
                  <ellipse
                    class="pl__electron"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(0,0%,100%)"
                    stroke-dasharray="1 289"
                    stroke-width="8"
                  />
                </g>
                <g class="pl__ring" transform="rotate(180)">
                  <ellipse
                    class="pl__electron"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(0,0%,100%)"
                    stroke-dasharray="1 289"
                    stroke-width="8"
                  />
                  <ellipse
                    class="pl__electron"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(0,0%,100%)"
                    stroke-dasharray="1 289"
                    stroke-width="8"
                  />
                  <ellipse
                    class="pl__electron"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(0,0%,100%)"
                    stroke-dasharray="1 289"
                    stroke-width="8"
                  />
                  <ellipse
                    class="pl__electron"
                    cx="64"
                    cy="64"
                    rx="60"
                    ry="30"
                    stroke="hsl(0,0%,100%)"
                    stroke-dasharray="1 289"
                    stroke-width="8"
                  />
                </g>
              </g>
            </svg>
            <div class="pl__nucleus">
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
              <div class="pl__nucleus-particle"></div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Preloader;
