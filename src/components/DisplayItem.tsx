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
    <Card style={{}}>
      <Card.Img
        style={{
          position: "relative",
          height: "200px",
          width: "300px",
          objectFit: "cover",
        }}
        variant="top"
        src={imgURL}
      />
      <Card.Body
        style={{
          fontFamily: "Sono, sans-serif",
          position: "absolute",
          bottom: 0,
          right: 0,
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
