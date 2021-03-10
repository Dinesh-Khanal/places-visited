import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className={`avatar &{props.className}`}>
      <img
        src={props.image}
        alt={props.title}
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default Avatar;
