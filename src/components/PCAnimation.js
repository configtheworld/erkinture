import React from "react";

function PCAnimation(props) {
  return (
    <div className="element-to-hide-in-mobile">
      <div
        style={{
          position: "relative",
          zIndex: "1",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: props.top,
            left: props.left,
            right: props.right,
            opacity: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              opacity: "0.5",
              zIndex: "1",
              marginRight: "-120px",
              scale: "0.9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="pc-screen">
              <div className="pc-inner-screen">
                <p
                  style={{
                    width: "100%",
                  }}
                  className={`pc-text ${
                    props.type === "200"
                      ? "server-text-green"
                      : "server-text-red"
                  }`}
                >
                  {props.type === "200" ? "200 OK" : "500 Err"} <br />
                  101010
                </p>
              </div>
            </div>
            <div className="pc-keyboard"></div>
          </div>

          <div
            style={{
              zIndex: "3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="pc-screen">
              <div className="pc-inner-screen">
                <p
                  style={{
                    width: "100%",
                  }}
                  className={`pc-text ${
                    props.type === "200"
                      ? "server-text-green"
                      : "server-text-red"
                  }`}
                >
                  {props.type === "200" ? "200 OK" : "500 Err"} <br />
                  101010
                </p>
              </div>
            </div>
            <div className="pc-keyboard"></div>
          </div>

          <div
            style={{
              opacity: "0.5",
              zIndex: "1",
              marginLeft: "-120px",
              scale: "0.9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="pc-screen">
              <div className="pc-inner-screen">
                <p
                  style={{
                    width: "100%",
                  }}
                  className={`pc-text ${
                    props.type === "200"
                      ? "server-text-green"
                      : "server-text-red"
                  }`}
                >
                  {props.type === "200" ? "200 OK" : "500 Err"} <br />
                  101010
                </p>
              </div>
            </div>
            <div className="pc-keyboard"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PCAnimation;
