import React from "react";
import "./Count.css";

export default class Count extends React.Component {
  render() {
    return (
      <div className="count">
        <p>Done: {this.props.doneCount}</p>
        <p>All: {this.props.allCount}</p>
        <p>Left: {this.props.allCount - this.props.doneCount}</p>
      </div>
    );
  }
}
