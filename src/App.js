import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>{count}</div>
        <button
          onClick={() => {
            this.modify(count + 1);
          }}
        >
          Increment
        </button>
      </>
    );
  }

  modify = n => {
    this.setState(current => {
      return {
        count: n,
      };
    });
  };
}

export default App;
