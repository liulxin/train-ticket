import React, { Component, useState, createContext, useContext } from "react";

const CountContext = createContext();

class Foo extends Component {
  static contextType = CountContext;
  render() {
    const count = this.context;
    return (
      // <CountContext.Consumer>
      //   {
      //     count => (<div>{count}</div>)
      //   }
      // </CountContext.Consumer>
      <div>{count}</div>
    );
  }
}

function Counter() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Click {count}</div>
      <CountContext.Provider value={count}>
        <Foo />
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

export default App;
