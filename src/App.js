import React, { Component } from "react";
import "./App.css";

const style = {
  marginTop: "40px",
  width: "15%",
  border: "2px solid blue",
};

const Input = (props) => {
  return <input style={style} onChange={props.action} />;
};

const Person = (props) => {
  return <h1 onClick={props.action}>{props.name}</h1>;
};

class App extends Component {
  state = {
    name: "Bella",
    username: "Max",
    user: {},
  };

  render() {
    return (
      <div className="App">
        <Input action={this.nameChangeHandler} />
        <Person name={this.state.name} />
        <Person name={this.state.username} />
        <Person name={this.state.user.name} action={this.onClickHandler} />
      </div>
    );
  }

  nameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  fetchNameHandler = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => user);
  };

  componentDidMount() {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchNameHandler(userId).then((user) => this.setState({ user: user }));
  }

  onClickHandler = () => {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchNameHandler(userId).then((user) => this.setState({ user: user }));
  };
}

export default App;
