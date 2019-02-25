import React, { useState } from "react";

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  return { value, onChange };
};

const App = () => {
  const nameInput = useInput("");

  return (
    <div>
      <h1>Use Hooks</h1>
      <br />
      <input {...nameInput} placeholder="What's your name" />
    </div>
  );
  /*
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const updateEmail = e => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </>
  );
  */
};

export default App;
