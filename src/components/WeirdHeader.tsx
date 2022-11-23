import type * as CSS from "csstype";

type WeirdHeaderProps = {
  name: String;
  id: number;
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max + 5);
}

export function WeirdHeader({ name, id }: WeirdHeaderProps) {
  const header: CSS.Properties = {
    fontFamily: "Sono, sans-serif",
    position: "absolute",
    fontWeight: "light",
    left: `calc((${id} * ${getRandomInt(30)}px) + 300px)`,
    top: `calc(${id} * 25px)`,
    fontSize: "6rem",
    letterSpacing: "3rem",
  };
  return (
    <h1 className="text-muted" style={header}>
      {name}
    </h1>
  );
}
