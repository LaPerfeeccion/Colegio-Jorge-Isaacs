import React from 'react';
import './ScrollText.css';

const FadeInText = ({ children }) => {
  return (
    <p className="fade-in-text">{children}</p>
  );
};

export default FadeInText;
