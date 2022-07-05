import { Component } from 'react';
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={handleSubmit}>
          <button type="submit" className="searchFormButton">
            <span className="searchFormButtonLabel">Search</span>
          </button>
      
          <input
            onChange={handleChange}
            className="searchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.defaultProps = {
  onSubmit: () => {}
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};