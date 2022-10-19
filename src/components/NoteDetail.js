import React from "react";
import propTypes from "prop-types";

const NoteDetail = ({ title, createdAt, body}) => {
  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__createdAt">{createdAt}</p>
      <p className="detail-page__body">{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
};

export default NoteDetail;