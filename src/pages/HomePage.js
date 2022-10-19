import React from "react";
import { useSearchParams } from 'react-router-dom';
import LocaleContext from "../context/LocaleContext";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { deleteNote, getActiveNotes } from "../utils/api";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
  }
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <main>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h2>{locale === "id" ? "Daftar Catatan" : "Notes List"}</h2>
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
    </main>
  );
}

export default HomePage;