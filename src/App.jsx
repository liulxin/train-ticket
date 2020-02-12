import React, { Component, PureComponent, useState, useEffect, useMemo, useRef, useCallback, memo } from "react";

// const Counter = memo(function Counter(props) {
//   console.log("counter render");
//   return <div onClick={props.onClick}>{props.count}</div>;
// });

class Counter extends PureComponent {
  speak() {
    console.log(`now counter is: ${this.props.count}`)
  }
  render() {
    const {props} = this
    return <div onClick={props.onClick}>{props.count}</div>;
  }
}

function App(props) {
  const [count, setCount] = useState(0);
  const counterRef = useRef()
  let it = useRef();

  const double = useMemo(() => {
    return count * 2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count === 3]);

  // useMemo(() => fn)
  // useCallback(fn)
  const onClick = useCallback(() => {
    counterRef.current.speak()
  }, [counterRef]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if(count >= 10) {
      clearInterval(it.current)
    }
  })

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>
        Click {count}, doublue: {double}
      </div>
      <Counter ref={counterRef} count={double} onClick={onClick} />
    </div>
  );
}

export default App;
