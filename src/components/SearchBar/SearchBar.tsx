import { Component } from 'react';
import './SearchBar.module.css';
import { SearchBarProps } from '../../constants/interfaces';

class SearchBar extends Component<SearchBarProps> {
  render() {
    const { onSubmit, onChange, value } = this.props;

    return (
      <form className="search-bar" onSubmit={onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={onChange}
          value={value}
          className="search-input"
        />
        <button className="search-button" type="submit">
          &#x1F50D;
        </button>
      </form>
    );
  }
}

export default SearchBar;
