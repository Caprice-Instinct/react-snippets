import { useEffect, useState } from "react";

export default function RandomColour() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }

    setColor(hexColour);
  }

  function handleCreateRandomRgbColour() {
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (type === "rgb") handleCreateRandomRgbColour();
    else handleCreateRandomHexColour();
  }, [type]);

  function handleTypeChange() {
    let typeOfColour = type;

    if (typeOfColour === "hex") setType("rgb");
    else setType("hex");
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        padding: "20px",
      }}
    >
      <button onClick={() => setType("hex")}>Create HEX color</button>
      <button onClick={() => setType("rgb")}>Create RGB color</button>
      <button onClick={handleTypeChange}>
        {type === "hex" ? "Switch to RGB" : "Switch to HEX"}
      </button>
      <button
        onClick={
          type === "hex"
            ? handleCreateRandomHexColour
            : handleCreateRandomRgbColour
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          marginTop: "30px",
        }}
      >
        <h3>{type === "rgb" ? "RGB Colour" : "HEX Colour"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
