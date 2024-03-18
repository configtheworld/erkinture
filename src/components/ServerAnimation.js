import React from "react";

function ServerAnimation(props) {
  return (
    <div>
      <div style={{ position: "relative", zIndex: "1" }}>
        <div
          style={{
            position: "absolute",
            top: props.top,
            left: props.left,
            right: props.right,
            opacity: 0.3,
          }}
        >
          <div className="server-box">
            <div className="server-keyboard">
              <p
                className={` ${
                  props.type === "200" ? "server-text-green" : "server-text-red"
                }`}
              >
                {props.type === "200" ? "200 OK" : "500 Err"}
              </p>
            </div>
            <div
              className={` ${
                props.type === "200" ? "server-light" : "server-light-error"
              } `}
            ></div>
            <div
              className={` ${
                props.type === "200" ? "server-light" : "server-light-error"
              } `}
            ></div>
            <div
              className={` ${
                props.type === "200" ? "server-light" : "server-light-error"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerAnimation;
