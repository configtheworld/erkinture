import { useState, useEffect, Fragment } from "react";

const Pulse = (props) => {
  return (
    <Fragment>
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            marginTop: "200px",
            position: "absolute",
            left: props.left,
            right: props.right,
            top: 0,
          }}
        >
          <div className="animated-bg">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pulse;
