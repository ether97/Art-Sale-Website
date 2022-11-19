import type * as CSS from "csstype";
import { DisplayItem } from "../components/DisplayItem";
import displayItems from "../data/items.json";
import { Button } from "react-bootstrap";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import { useState } from "react";

const homeImg: CSS.Properties = {
  backgroundImage: "url('abstract.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  height: "70vh",
  width: "100%",
  transform: "rotate(180deg)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative",
};

const homeContainer: CSS.Properties = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  //   alignItems: "center",
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
  const [array, setArray] = useState([1, 2, 3]);

  const handleAdd = () => {
    if (array[array.length - 1] === 6) {
      setArray([1, 2, 3]);
    } else {
      setArray(array.map((item) => item + 1));
    }
  };

  const handleSubtract = () => {
    if (array[0] === 1) {
      setArray([4, 5, 6]);
    } else {
      setArray(array.map((item) => item - 1));
    }
  };
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
          position: "absolute",
          display: "flex",
          width: "100%",
          gap: "10px",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "100px",
          top: "600px",
          transition: "1s ease",
        }}
      >
        <Button
          onClick={handleSubtract}
          variant="none"
          style={{ border: "none" }}
        >
          <HiOutlineArrowSmLeft style={{ scale: "2" }} />
        </Button>
        {displayItems.map((item) => {
          if (array.includes(item.id)) {
            return <DisplayItem {...item} />;
          }
        })}
        <Button onClick={handleAdd} variant="none" style={{ border: "none" }}>
          <HiOutlineArrowSmRight style={{ scale: "2" }} />
        </Button>
      </div>
    </div>
  );
}
