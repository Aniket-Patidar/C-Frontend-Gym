import { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const name = "The Great GYM";
  let index = 1;

  useEffect(() => {
    const typeWriter = () => {
      let newTitle = name.slice(0, index);
      setText(newTitle);

      index > name.length ? (index = 1) : index++;

      setTimeout(() => typeWriter(), 2000);
    };

    typeWriter();

    return () => clearTimeout(typeWriter);
  }, []);

  return (
    <h1 className="main_heading left-[50px] self-center font-semibold whitespace-nowrap dark:text-white absolute text-lg">
      {text}
    </h1>
  );
};

export default TypingEffect;
