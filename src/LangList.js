import React from "react";

export default function(props) {
  return (
    <ul>
      {props.langs.map(l => (
        <li onClick={props.click} style={{ display: "inline" }}>
          {l + "  "}
        </li>
      ))}
    </ul>
  );
}
