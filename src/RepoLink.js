import React from "react";

export default function(props) {
  return (
    <div>
      <b>Repo: </b>
      <a href={props.link}> {props.name} </a>
    </div>
  );
}
