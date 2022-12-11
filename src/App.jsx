import Todo from "./Todo.jsx";
import Count from "./Count.jsx";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todos: [],
    };
  }

  render() {
    const { todos, name } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    const allCount = todos.filter((todo) => todo).length;
    return (
      <div>
        <h1>TO DO</h1>
        <Count allCount={allCount} doneCount={doneCount} />
        <div>
          <input className="input" value={name} onChange={this.handleSetName} />
          <button className="button" onClick={this.handleAddTodo}>
            Add
          </button>
        </div>
        {todos.map((todo) => (
          <Todo
            name={todo.name}
            done={todo.done}
            onDone={this.handleSetDone}
            onRemove={this.handleRemoveTodo}
          />
        ))}
      </div>
    );
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddTodo = () => {
    if (this.state.name !== "" || this.state.name !== this.state.todos) {
      const todo = {
        name: this.state.name,
        done: false,
      };

      this.setState({
        name: "",
        todos: this.state.todos.concat([todo]),
      });
    } else {
      alert("нельзя ничего не делать");
    }
  };

  handleSetDone = (done, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done } : todo
      ),
    });
  };
  handleRemoveTodo = (name) =>
    this.setState({
      name: this.state.name,
      todos: this.state.todos.filter((todo) => todo.name !== name),
    });
}

export default App;
