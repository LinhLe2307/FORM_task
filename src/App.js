import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import View from "./components/View";
import Overlay from "./components/Overlay";

class App extends Component {
  state = {
    // This is explicitly telling React what to look since we will have more state in the future
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
  };
  inputHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };
  addSubmitHandler = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  };

  resetForm = (event) => {
    window.location.reload();
  };
  // resetForm = () => {
  //   return this.setState({
  //     inputData: {
  //       firstname: "",
  //       lastname: "",
  //       phonenumber: "",
  //       message: "",
  //       role: "",
  //     },
  //   });
  // };
  render() {
    return (
      <div>
        <Form
          onChange={this.inputHandler}
          onSubmit={this.addSubmitHandler}
          {...this.state.inputData}
        />
        <View {...this.state.inputData} />
        {this.state.showPopup && (
          <Overlay
            close={this.resetForm}
            click={this.addSubmitHandler}
            {...this.state.inputData}
            reset={this.resetForm}
          />
        )}
      </div>
    );
  }
}

export default App;
