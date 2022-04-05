import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import View from "./components/View";
import Overlay from "./components/Overlay";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    role: "",
    showPopup: false,
  };
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.showPopup) {
      this.setState({
        ...this.state,
        showPopup: false,
      });
    } else {
      this.setState({
        ...this.state,
        showPopup: true,
      });
    }
  };
  render() {
    
    return (
      <div>
        <Form onChange={this.changeHandler} onClick={this.addSubmitHandler} />
        <View input={this.state} />
        <Overlay
          showPopup={this.state.showPopup}
          onClick={this.addSubmitHandler}
          state={this.state}
        />

      </div>
    );
  }
}

export default App;
