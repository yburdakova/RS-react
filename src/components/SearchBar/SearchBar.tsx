import { FormEvent, useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import './SearchBar.css'
import { useAppSelector } from '../../hooks/redux'

const SearchBar: React.FC = ( ) => {

  const {searchQuery} = useAppSelector( state => state.dataReducer)
  const {setSearchRequest, fetchData} = useActions()
  const [localSearchQuery, setLocalSearchQuery] = useState<string>(searchQuery);
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSearchRequest(localSearchQuery)
    }

    useEffect(() =>{
      fetchData(searchQuery)
  }, [searchQuery])

  
  return (
    <search role='search' className="search-container">
      <form  className="search_bar" onSubmit={(e)=>handleSubmit(e)}>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          value={localSearchQuery}
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
