import React from "react";

export const Tile = (props) => {
  const objectValues = Object.values(props.object);

  return (
    <div className="tile-container">
      {
        objectValues.map((objectValue, index) => {
          if (index === 0) {
            return <p key={index} className="tile-title">{objectValue}</p>
          } else {
            return <p key={index} className="tile">{objectValue}</p>
          }
        })}
    </div>
  );
};
