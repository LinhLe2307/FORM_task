import React from "react";

const NoteList = (props) => {
  return (
    <ol className="displayed-container">
      {props.data.map((note) => (
        <li key={note.id}>
          {note.firstname} {note.lastname} | {note.phonenumber} |{note.role} |{" "}
          {note.message}
          <span
            class="material-symbols-rounded"
            onClick={(e) => props.delete(e, note.id)}
          >
            delete
          </span>
          <span
            class="material-symbols-rounded"
            onClick={() => {
              props.edit(note);
            }}
          >
            edit
          </span>
        </li>
      ))}
    </ol>
  );
};

export default NoteList;
