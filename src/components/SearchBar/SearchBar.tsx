import { FormEvent, useEffect, useState } from 'react'
import './SearchBar.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setSearchRequest, fetchData } from '../../store/reducers/dataActionCreators'
import { setId } from '../../store/reducers/characterActionCreators'
import {  useNavigate } from 'react-router-dom'

const SearchBar: React.FC = ( ) => {

  const {searchQuery} = useAppSelector( state => state.dataReducer)
  const [localSearchQuery, setLocalSearchQuery] = useState<string>(searchQuery);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(setId(0))
      navigate('/')
      dispatch(setSearchRequest(localSearchQuery))
    }

    useEffect(() =>{
      dispatch(setId(0))
      dispatch(fetchData(searchQuery))
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
