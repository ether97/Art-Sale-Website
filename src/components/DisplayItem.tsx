import { Card } from "react-bootstrap";

type DisplayItemProps = {
  name: string;
  artist: string;
  price: number;
  id: number;
  imgURL: string;
};
export function DisplayItem({
  name,
  artist,
  price,
  id,
  imgURL,
}: DisplayItemProps) {
  return (
    <Card style={{ background: "transparent" }}>
      <Card.Img
        style={{
          position: "relative",
          height: "200px",
          width: "300px",
          objectFit: "cover",
          margin: "20px",
          borderRadius: "5px",
        }}
        variant="top"
        src={imgURL}
      />
      <Card.Body
        style={{
          fontFamily: "Sono, sans-serif",
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Card.Title
          style={{ textAlign: "right", color: id === 3 ? "black" : "white" }}
        >
          {name}
        </Card.Title>
        <Card.Text
          className="fw-bold"
          style={{ textAlign: "right", color: id === 3 ? "black" : "white" }}
        >
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
