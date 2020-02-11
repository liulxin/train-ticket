import React, { Component, useState } from "react";

class App2 extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    return (
      <div
        onClick={() =>
          this.setState({
            count: count + 1
          })
        }
      >
        Click {count}
      </div>
    );
  }
}

function App(props) {
  // const [count, setCount] = useState(0);
  // 延迟初始化
  const [count, setCount] = useState(() => {
    console.log('init')
    return props.defaultCount || 0
  });

  return (
    <div onClick={() => setCount(count + 1)}>
      Click {count}
    </div>
  );
}

export default App;
