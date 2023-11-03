import React, { useState, useRef } from "react";

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const colorPickerRef = useRef(null);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handlePickColorClick = () => {
    // Trigger the color picker input's click event
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
    }
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        ref={colorPickerRef}
        style={{ display: "none" }}
      />
      <button onClick={handlePickColorClick}>Pick Color</button>
      <div
        style={{
          backgroundColor: selectedColor,
          width: "100px",
          height: "100px",
          margin: "20px 0",
        }}
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}

export default ColorPicker;
