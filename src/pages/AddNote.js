import React from "react";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();

  function onAddNoteHandler({title, body}) {
    addNote({title, body});
    navigate('/');
  }
  return (
    <>
    <NoteInput addNote={onAddNoteHandler}/>
    </> 
  );
}

export default AddNote;
