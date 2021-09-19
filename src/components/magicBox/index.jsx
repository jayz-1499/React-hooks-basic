import React from "react";
import "./magicbox.css";
import useMagicColor from "../../hooks/useMagicColor";

function MagicBox() {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
