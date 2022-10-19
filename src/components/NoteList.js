import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes, onDelete }) => {
  if (!notes.length) {
    return (
      <div className="notes-list-empty">
        <p>Catatan Tidak Ditemukan</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} id={note.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

NoteList.prototype = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
