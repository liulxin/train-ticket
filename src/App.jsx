import React, { Component, useState, useEffect } from "react";

class App2 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  };

  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener("resize", this.onResize, false);
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize, false);
  }

  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  };

  render() {
    const { count, size } = this.state;
    return (
      <div
        onClick={() =>
          this.setState({
            count: count + 1
          })
        }
      >
        Click {count}
        size: {size.width} {size.height}
      </div>
    );
  }
}

function App(props) {
  const [count, setCount] = useState(0);

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };

  useEffect(() => {
    document.title = count;
  });

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  useEffect(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);

  const onClick = () => {
    console.log("click");
  };

  useEffect(() => {
    document.querySelector("#size").addEventListener("click", onClick, false);

    return () => {
      document
        .querySelector("#size")
        .removeEventListener("click", onClick, false);
    };
  });

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Click {count}</div>
      {/* size: {size.width} {size.height} */}
      {count % 2 ? (
        <span id="size">
          span: {size.width} {size.height}
        </span>
      ) : (
        <p id="size">
          p: {size.width} {size.height}
        </p>
      )}
    </div>
  );
}

export default App;
