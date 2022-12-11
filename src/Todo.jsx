import "./Todo.css";
import React from "react";

export default class Todo extends React.Component {
  render() {
    const { done, name } = this.props;
    return (
      <div
        id="todo"
        className={done ? "done" : ""}
        onMouseEnter={this.handleDeleteOn}
        onMouseLeave={this.handleDeleteOff}
      >
        <input type="checkbox" checked={done} onChange={this.handleCheck} />
        <span>{name}</span>

        <button className="deletbutton" onClick={this.handleRemoveTodo}>
          delet
        </button>
      </div>
    );
  }

  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.name);
  };

  handleRemoveTodo = (name) => {
    this.props.onRemove(this.props.name);
  };

  handleDeleteOn = () => {
    this.setState({ isHovered: true });
  };

  handleDeleteOff = () => {
    this.setState({ isHovered: false });
  };
}
