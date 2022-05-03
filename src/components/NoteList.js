import React from "react";
import Button from "./Button";
import classes from "./Button.module.css";

const NoteList = (props) => {
  return (
    <ol className="displayed-container">
      {props.data.map((note) => (
        <li key={note.id}>
          {note.firstname} {note.lastname} | {note.phonenumber} |{note.role} |{" "}
          {note.message}
          <Button
            className={classes.deleteBtn}
            onClick={(e) => props.delete(e, note.id)}
          >
            <span class="material-symbols-outlined">X</span>
          </Button>
          <Button
            className={classes.updateBtn}
            onClick={() => {
              props.edit(note, note.id);
            }}
          >
            Update
          </Button>
        </li>
      ))}
    </ol>
  );
};

export default NoteList;
