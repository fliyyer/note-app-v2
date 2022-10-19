import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/api";

const DetailNote = () => {
  const [note, setNote] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await getNote(id);
      setNote(response.data);
    };

    getData();
  }, []);

  return (
    <div className="detail-page">
      <div className="detail-page__body">
        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__createdAt">
          {note.createdAt}
        </p>
        <p className="detail-page__body">{note.body}</p>
      </div>
    </div>
  );
};

export default DetailNote;
