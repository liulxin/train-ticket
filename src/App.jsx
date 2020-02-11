import React, { Component, PureComponent, memo } from "react";
import "./App.css";

// class Foo extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.name === this.props.name) {
//       return false;
//     }
//   }
//   render() {
//     console.log("Foo render");
//     return null;
//   }
// }

// class Foo extends PureComponent {
//   render() {
//     console.log("Foo render");
//     return <div>{this.props.person.age}</div>;
//   }
// }

const Foo = memo(function Foo(props) {
  console.log("Foo render");
  return <div>{props.person.age}</div>;
});

class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  };
  render() {
    const person = this.state.person;
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          add count
        </button>
        <button
          onClick={() => {
            person.age++;
            this.setState({ person: Object.assign({}, person) });
          }}
        >
          add person.age
        </button>
        {this.state.count}
        <Foo name="mike" person={person} />
      </div>
    );
  }
}

export default App;
