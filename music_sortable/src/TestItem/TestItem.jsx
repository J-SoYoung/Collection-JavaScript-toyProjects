import React from "react";
import "./TestItem.css";

function TestItem({ data, index }) {
  console.log(data);
  return (
    <>
      <div className="test-item">
        <p>content : {data.content}</p>
        <p>index : {index}</p>
      </div>
    </>
  );
}
export default TestItem;
