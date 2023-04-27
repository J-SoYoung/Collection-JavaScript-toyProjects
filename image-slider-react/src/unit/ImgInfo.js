import React from "react";

export const ImgColor = [
  "red",
  "orange",
  "yellow",
  "orange",
  "green",
  "blue",
  "violet",
  "green",
  "indigo",
];

export const ImgList = () => {
  const imgList = ImgColor.map((el, idx) => (
    <li key={idx}>
      <img src={`./img/${el}.jpeg`}/>
    </li>
  ));
  return <>{imgList}</>;
};
