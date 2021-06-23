import React from "react";
import "./Input.css";

class Input extends React.Component {
  state = {
    inputText: ""
  };
  getInputText = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          className=""
          onSubmit={(e) => this.props.submitInput(this.state.inputText, e)}
        >
          <div className="form">
            <label>Image Name:</label>
            <input
              type="text"
              onChange={this.getInputText}
              placeholder="enter.........."
            />
            <span></span>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
