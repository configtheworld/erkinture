import React from "react";

function Tag(props) {
  return (
    <div>
      {props.size === "sm" ? (
        <div className="tag-sm">
          <div className="tag-dot-sm"></div>
          {props.children}
        </div>
      ) : (
        <div className="tag">
          <div className="tag-dot"></div>
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Tag;
