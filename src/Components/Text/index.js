import React from "react";

function Text(props) {
  const { count } = props;
  return <div style={{ color: "#876545", margin: "0 1em" }}>{count}</div>;
}

export default Text;
