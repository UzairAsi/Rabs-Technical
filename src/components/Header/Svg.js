import React from "react";

const Svg = ({ path, classname, span = true, children }) => {
  return (
    <>
      {span === true ? (
        <span className={classname}>
          <svg focusable="false" aria-hidden="false" viewBox="0 0 24 24">
            <path d={path}></path>
          </svg>
        </span>
      ) : (
        <>
          <svg focusable="false" aria-hidden="false" viewBox="0 0 24 24">
            <path d={path}></path>
            {children}
          </svg>
        </>
      )}
    </>
  );
};

export default Svg;
