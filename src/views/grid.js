import React, { useEffect } from "react";
import "./grid.css";
import data from "../ServiceData/data";

const Grid = () => {
  return (
    <div className="container">
      {data.map((e) => {
        return (
          <div className="item" key={e.id}>
            <img src={e.name} className="galImg" />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
