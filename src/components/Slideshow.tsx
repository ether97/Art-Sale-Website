import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import items from "../data/items.json";
import type * as CSS from "csstype";

const slideContainer: CSS.Properties = {
  height: "100vh",
  position: "relative",
};

const fade: CSS.Properties = {
  position: "absolute",
  top: 0,
  height: "20px",
  width: "100%",
  backgroundImage: "linear-gradient(to bottom, white, transparent)",
};

const fade2: CSS.Properties = {
  position: "absolute",
  bottom: 0,
  height: "20px",
  width: "100%",
  backgroundImage: "linear-gradient(to bottom, transparent, white)",
};

export function Slideshow() {
  return (
    <div style={slideContainer}>
      <Fade
        arrows={false}
        easing={"ease"}
        transitionDuration={2000}
        duration={4000}
        pauseOnHover={false}
      >
        {items.map((fadeImage, index) => (
          <div
            className="each-fade"
            key={index}
            style={{
              backgroundImage: `url(${fadeImage.imgURL})`,
              backgroundSize: "cover",
              height: "100vh",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              fontFamily: "Sono, sans-serif",
            }}
          >
            <h2
              style={{
                marginLeft: "100px",
                fontSize: "3rem",
                color: fadeImage.name === "Multiverse" ? "black" : "white",
              }}
            >
              {fadeImage.name}
              <div
                style={{
                  height: "1px",
                  width: "50%",
                  backgroundImage: `linear-gradient(to right, white, transparent)`,
                  marginTop: "10px",
                }}
              ></div>
              <p style={{ fontSize: "1rem", width: "50%", marginTop: "10px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </h2>
            <div style={fade}></div>
            <div style={fade2}></div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
