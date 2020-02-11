import React, { Component, lazy, Suspense } from "react";
import "./App.css";

const About = lazy(() => import(/* webpackChunkName: "about"*/ "./About"));

// ErrorBoundary
// componentDidCatch

class App extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>this is error</div>;
    }
    return (
      <div>
        <Suspense fallback={<div>this is loading...</div>}>
          <About></About>
        </Suspense>
      </div>
    );
  }
}

export default App;
