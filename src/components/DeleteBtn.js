import React from "react";
import { AiFillDelete } from "react-icons/ai"
import PropTypes from "prop-types";

const DeleteBtn = ({ id, onDelete }) => {
  return (
    <div>
      <AiFillDelete className="action" onClick={() => onDelete(id)} />
    </div>
  );
}

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteBtn;
