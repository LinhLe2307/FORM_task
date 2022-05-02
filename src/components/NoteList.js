import React from "react";
// import Button from "./Button";

const NoteList = (props) => {
  return (
    <ol className="displayed-container">
      {props.data.map((note) => (
        <li key={note.id}>
          {note.firstname} {note.lastname} | {note.phonenumber} |{note.role} |{" "}
          {note.message}
          <button onClick={(e) => props.delete(e, note.id)}>X</button>
        </li>
      ))}
    </ol>
  );
};

export default NoteList;
