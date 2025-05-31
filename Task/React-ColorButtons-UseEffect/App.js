import React, { useState, useEffect } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [counts, setCounts] = useState({
    red: 0,
    green: 0,
    blue: 0,
    pink: 0,
    yellow: 0,
  });

  const [lastClicked, setLastClicked] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
    setLastClicked(color);
  };

  useEffect(() => {
    if (lastClicked) {
      const count = counts[lastClicked];
      alert(`${lastClicked.toUpperCase()} clicked ${count} times`);
      console.log(`${lastClicked.toUpperCase()} clicked ${count} times`);
    }
  }, [counts, lastClicked]);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Click a color to change the box</h3>

      {["red", "green", "blue", "pink", "yellow"].map((color) => (
        <button
          key={color}
          onClick={() => handleColorClick(color)}
          style={{ marginRight: "10px" }}
        >
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>
      ))}

      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: selectedColor,
          border: "2px solid black",
        }}
      ></div>

      <div style={{ marginTop: "20px" }}>
        <h4>Click Counts:</h4>
        <ul>
          {Object.entries(counts).map(([color, count]) => (
            <li key={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
