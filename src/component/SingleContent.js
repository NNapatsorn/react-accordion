import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleContent = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <article className='content'>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={() => setShowContent(!showContent)}>
            {showContent ? <FaMinus /> : <FaPlus />}
          </button>
        </header>
        {showContent && <p> {description} </p>}
      </article>
    </>
  );
};

export default SingleContent;
