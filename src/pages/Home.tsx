import type * as CSS from "csstype";
import { Slideshow } from "../components/Slideshow";
import { WeirdHeader } from "../components/WeirdHeader";
import items from "../data/items.json";

const homeImg: CSS.Properties = {
  backgroundImage: "url('abstract.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
  transform: "rotate(180deg)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative",
};

const homeContainer: CSS.Properties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const h1: CSS.Properties = {
  fontFamily: "Sono, sans-serif",
};

const h5: CSS.Properties = {
  fontFamily: "Sono, sans-serif",
  fontWeight: "bold",
  color: "black",
  marginRight: "10px",
};

const fade: CSS.Properties = {
  position: "absolute",
  top: 0,
  height: "20px",
  width: "100%",
  backgroundImage: "linear-gradient(to bottom, transparent, white)",
  transform: "rotate(180deg)",
};

const infoContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  transform: "rotate(180deg)",
  marginRight: "100px",
};

export function Home() {
  return (
    <div style={homeContainer}>
      <div style={homeImg}>
        <div style={infoContainer}>
          <h1 style={h1}>the time is now.</h1>
          <h5 style={h5}>ON EVERYTHING</h5>
        </div>
        <div style={fade}></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "30vh",
          position: "relative",
        }}
      >
        {items.map((item) => (
          <WeirdHeader name={item.name} id={item.id} key={item.id} />
        ))}
      </div>
      <Slideshow />
      <div
        style={{
          width: "100%",
          height: "30vh",
        }}
      ></div>
    </div>
  );
}
