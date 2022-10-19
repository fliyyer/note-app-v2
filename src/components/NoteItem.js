import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

const NoteItem = ({ title, body, createdAt, id, onDelete }) => {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
      <br />
      <DeleteBtn id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default NoteItem;