import React from "react";

const index = ({ styles, content }) => {
  return (
    <form className={styles}>
      {content.map((element, index) => {
        return <div key={index}>{element}</div>;
      })}
    </form>
  );
};

export default index;
