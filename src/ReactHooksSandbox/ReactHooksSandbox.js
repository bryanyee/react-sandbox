import React, { useEffect, useRef, useState } from 'react';

const ReactHooksSandbox = () => {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(null);
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = `Clicked ${counter} times.`

    return () => document.title = titleRef.current;
  })

  return (
    <div>
      <div className="mb-5">
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div className="mb-5">
        <div><input ref={inputRef} /></div>
        <button onClick={() => inputRef.current.focus()}> Focus on input</button>
      </div>
    </div>
  );
};

export default ReactHooksSandbox;
