import React from "react";
import PropTypes from "prop-types";
import useMagicColor from "../Hook/useMagicColor";
import "./MagicBox.css";

MagicBox.propTypes = {};

function MagicBox() {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
