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

  popUpHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  };

  addSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error));
    this.resetForm();
  };

  resetForm = (event) => {
    window.location.reload();
  };

  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((response) =>
      this.setState({
        data: response.data,
      })
    );
  }

  render() {
    const deleteHandler = (event, id) => {
      event.preventDefault();

      this.setState((prevState) => ({
        data: prevState.data.filter((data) => data.id !== id),
      }));

      axios
        .delete(`http://localhost:3010/notes/${id}`)
        .then((res) => console.log("res", res))
        .catch((error) => console.log("error", error));
    };
    return (
      <>
        <div className="input-form">
          <Form
            change={this.inputHandler}
            {...this.state.inputData}
            submit={this.popUpHandler}
          />
          <View {...this.state.inputData} />
          {this.state.showPopup && (
            <Overlay
              submit={this.addSubmitHandler}
              {...this.state.inputData}
              close={this.resetForm}
            />
          )}
        </div>

        <NoteList data={this.state.data} delete={deleteHandler} />
      </>
    );
  }
}

export default App;
