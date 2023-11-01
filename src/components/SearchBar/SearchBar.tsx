import styles from './SearchBar.module.css';
import { SearchBarProps } from '../../constants/interfaces';

function SearchBar({ onSubmit, onChange, value } : SearchBarProps) {
  return (
    <form className={styles.search_bar} onSubmit={onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={onChange}
          value={value}
          className={styles.search_input}
        />
        <button className={styles.search_button} type="submit">
          &#x1F50D;
        </button>
      </form>
  )
}

export default SearchBar
