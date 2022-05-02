import React from "react";

const NoteList = (props) => {
  return (
    <ol className="displayed-container">
      {props.data.map((note) => (
        <li>
          {note.firstname} {note.lastname} | {note.phonenumber} |
          {note.role} | {note.message}
        </li>
      ))}
    </ol>
  );
};

export default NoteList;
 