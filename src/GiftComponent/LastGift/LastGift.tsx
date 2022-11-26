import React from "react";
import "./last.css";

export const LastGift = ({ isShown }) => {
  return isShown ? (
    <div className="last-gift">
      <video width={800} height={600} autoPlay controls>
        <source src="" type="video/mp4"></source>
      </video>
    </div>
  ) : (
    <></>
  );
};
