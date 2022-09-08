import React from 'react';

const ClickButton = ({ name, link, style }) => {
  return (
    <button className={style === 'black' ? 'black' : 'white'}>
      <a href={link}>{name}</a>
    </button>
  );
};

export default ClickButton;
