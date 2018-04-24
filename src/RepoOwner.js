import React from "react";

export default props => {
  let style = {
    width: "1em"
  };
  return (
    <div>
      <b>owner: </b>
      {props.name + " "}
      <img src={props.avatar} style={style} />
    </div>
  );
};
