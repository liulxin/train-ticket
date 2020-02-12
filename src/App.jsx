import React, { Component, useState, useMemo, useCallback, memo } from "react";

const Counter = memo(function Counter(props) {
  console.log("counter render");
  return <div onClick={props.onClick}>{props.count}</div>;
});

function App(props) {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count === 3]);

  // const onClick = () => {
  //   console.log('onclick')
  // }

  // useMemo(() => fn)
  // useCallback(fn)
  const onClick = useCallback(() => {
    console.log("onclick");
  }, []);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>
        Click {count}, doublue: {double}
      </div>
      <Counter count={double} onClick={onClick} />
    </div>
  );
}

export default App;
