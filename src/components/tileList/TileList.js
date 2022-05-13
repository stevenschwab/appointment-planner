import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.object.map((object, index) => {
        return <Tile key={index} object={object}></Tile>
      })}
    </div>
  );
};
