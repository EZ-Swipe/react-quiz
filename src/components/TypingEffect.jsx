import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, delay }) => {
const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const printText = (text, delay) => {
      if (text.length > 0) {
        setDisplayedText(prevText => prevText + text[0]);
        setTimeout(() => {
          printText(text.slice(1), delay);
        }, delay);
      }
    };
    printText(text, delay);

    return () => clearTimeout(printText);
  }, [text, delay]);

  return <>{displayedText}</>;
}

export default TypingEffect;