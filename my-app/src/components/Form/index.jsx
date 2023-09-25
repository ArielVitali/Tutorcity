import React from "react";

const index = ({ styles, content }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles}>
      {content.map((element, index) => {
        return <div key={index}>{element}</div>;
      })}
    </form>
  );
};

export default index;
