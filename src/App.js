import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import View from "./components/View";
import Overlay from "./components/Overlay";
import NoteList from "./components/NoteList";
import axios from "axios";

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
    data: [],
    isLoading: false,
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

    // axios
    //   .post("http://localhost:3010/notes", {
    //     firstname: this.state.inputData.firstname,
    //     lastname: this.state.inputData.lastname,
    //     phonenumber: this.state.inputData.phonenumber,
    //     message: this.state.inputData.message,
    //     role: this.state.inputData.role,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error));

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

  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((response) =>
      this.setState({
        data: response.data,
      })
    );
  }

  render() {
    return (
      <>
        <div className="input-form">
          <Form
            change={this.inputHandler}
            {...this.state.inputData}
            submit={this.addSubmitHandler}
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

        <NoteList data={this.state.data} />
      </>
    );
  }
}

export default App;
