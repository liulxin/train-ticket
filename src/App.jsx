import React, { Component, PureComponent, useState, useEffect, useMemo, useRef, useCallback, memo } from "react";

// class Counter extends PureComponent {
//   render() {
//     const {props} = this
//     return <div>{props.count}</div>;
//   }
// }

function useCounter(count) {
  return <div>{count}</div>;
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  let it = useRef();

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

  return [count, setCount]
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)

    return () => window.removeEventListener('resize', onResize, false)
  }, [onResize])

  return size
}

function App(props) {
 
  const [count, setCount] = useCount(2)

  const Counter = useCounter(count)

  const size = useSize()

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>
        Click {count}
      </div>
      {/* <Counter count= {count}/> */}
      {Counter}

      {size.width} -- {size.height}
    </div>
  );
}

export default App;
