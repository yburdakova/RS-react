import './SearchBar.css'
import { SearchBarProps } from '../../types/interfaces';

function SearchBar({ onSubmit, onChange, value } : SearchBarProps) {
  
  return (
    <search role='search' className="search-container">
      <form  className="search_bar" onSubmit={onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={onChange}
          value={value}
          className="search_input"
        />
        <button className="search_button" type="submit">
          &#x1F50D;
        </button>
      </form>
    </search>
  )
}

export default SearchBar
