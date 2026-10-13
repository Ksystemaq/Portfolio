import React, { useState, useEffect } from 'react';

const Typewriter = ({ words = ["John Alexis"], typingSpeed = 120, deletingSpeed = 70, pauseDuration = 1800 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    let timer;
    if (isDeleting) {
      // Deleting letters
      timer = setTimeout(() => {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      // Typing letters
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Pause at end of word before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center text-teal-400 dark:text-teal-400">
      <span>{currentText}</span>
      <span className="inline-block w-[3px] h-[1em] ml-1 bg-teal-400 animate-pulse"></span>
    </span>
  );
};

export default Typewriter;

