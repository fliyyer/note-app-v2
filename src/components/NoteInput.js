import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <main className="add-new-page__input">
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <input
            className="add-new-page__input__body"
            type="text"
            placeholder="Masukan catatanmu..."
            value={this.state.tag}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Tambah Catatan</button>
        </form>
      </main>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
