import React, { useState, useEffect } from "react";
import axios from "axios";

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

const useFetch = url => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await axios.get(url);
      setPayload(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
};

const App = () => {
  const nameInput = useInput("");
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");

  return (
    <div>
      <h1>Use Hooks</h1>
      <br />
      <input {...nameInput} placeholder="What's your name" />
      <br />
      {loading && <span>Loading cat...</span>}
      {!loading && error && <span>Error: {error}</span>}
      {!loading && !error && payload && (
        <img alt="cats" src={payload.file} width={150} />
      )}
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
