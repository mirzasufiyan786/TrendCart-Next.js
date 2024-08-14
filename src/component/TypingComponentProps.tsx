import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface TypingComponentProps {
  words: string[];
}

const TypingComponent: React.FC<TypingComponentProps> = ({ words }) => {
  return (
    <div className="flex ">
      <h1 className="text-4xl font-bold text-gray-800">
        <Typewriter
          words={words}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypingComponent;
