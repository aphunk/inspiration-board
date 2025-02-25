import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: "",
      emoji: "",
      text: ""
    };
  }

  handleInputChange = (event) => {
    const updatedState = {};
    updatedState[event.target.name] = event.target.value;
    this.setState(updatedState);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const newCard = this.state;

    this.props.addCardCallback(newCard);

    this.setState({
      id: "",
      emoji: "",
      text: ""
    })
  }

  render() {
    const emojiSelectOptions = EMOJI_LIST.map((emojiName, i) => {
      return (
        <option key={i} value={emojiName}>
          {emoji.getUnicode(emojiName)}
        </option>
      )
    })

    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">
          Add a New Inspirational Message
        </h3>

        <form className="new-card-form__form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="text"
            className="new-card-form__form-label">
            Your message:
          </label>
          <textarea name="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <label htmlFor="emoji"
            className="new-card-form__form-label">
            Emoji:
          </label>
          <select name="emoji"
            className="new-card-form__form-select"
            value={this.state.emoji}
            onChange={this.handleInputChange}
          >
            {emojiSelectOptions}
          </select>
          <input name="submit"
            type="submit"
            className="new-card-form__form-button"
            value="Post it!" />
        </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
}
export default NewCardForm;