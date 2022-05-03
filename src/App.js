import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import View from "./components/View";
import Overlay from "./components/Overlay";
import NoteList from "./components/NoteList";
import EditForm from "./components/EditForm";
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
    updatePopup: false,
    currentNote: {},
    itemId: null,
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

  deleteHandler = (event, id) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3010/notes/${id}`)
      .then((res) => {
        this.setState((prevState) => ({
          data: prevState.data.filter((item) => item.id !== id),
        }));
      })
      .catch((error) => console.log("error", error));
  };

  updateHandler = (item, id) => {
    this.setState(
      (prevState) => ({
        updatePopup: !prevState.updatePopup,
        currentNote: item,
        itemId: id,
      })
    );
  };

  inputUpdateHandler = (e) => {
    e.preventDefault();
    this.setState(
      {
        currentNote: {
          ...this.state.currentNote,
          [e.target.name]: e.target.value,
        },
      },
    );
    this.postHandler();
  };

  postHandler = () => {
    axios
      .put(
        `http://localhost:3010/notes/${this.state.itemId}`,
        this.state.currentNote
      )
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => console.log("error", error));
  };

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

        <NoteList
          data={this.state.data}
          delete={this.deleteHandler}
          edit={this.updateHandler}
          postHandler={this.postHandler}
        />

        {this.state.updatePopup && (
          <EditForm
            change={this.inputUpdateHandler}
            {...this.state.currentNote}
            // submit={this.addSubmitHandler}
          />
        )}
      </>
    );
  }
}

export default App;
