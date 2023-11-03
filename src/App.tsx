import React, { useState, useEffect } from 'react';
import { Loader, SearchBar, ErrorButton, SelectBar, CharacterList } from './components';
import { AppProps, CharacterProps } from './constants/interfaces';
import './App.css';
import { fetchCharacters } from './api/api';

const App: React.FC <AppProps> = () => {
  const savedSearchRequest = localStorage.getItem('searchRequest');
  const savedLimitRequest = localStorage.getItem('selectedLimit');

  const [data, setData] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(savedSearchRequest || '');
  const [searchRequest] = useState(savedSearchRequest || '');
  const [isError, setIsError] = useState(false);
  const [selectedLimit, setSelectedLimit] = useState (savedLimitRequest || 10); 


  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLimit(parseInt(e.target.value))
  }

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchRequest', searchValue);
    fetchResults(searchValue);
  };

  useEffect(() => {
    localStorage.setItem('selectedLimit', selectedLimit.toString());
    fetchResults(searchValue);
  },[selectedLimit])

  const errorCalling = () => {
    setIsError(true);
  };

  useEffect(() => {
    if (isError) {
      throw new Error('Test error');
    }
  }, [isError])

  const fetchResults = (searchTerm: string) => {
    setLoading(true);
  
    fetchCharacters(searchTerm)
      .then((results) => {
        setData(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  
  useEffect(() => {
    fetchResults(searchRequest);
  }, [searchRequest]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <section id="top-section">
            <div className="search_container">
              <SearchBar
                onChange={onSearchChange}
                onSubmit={onSearchSubmit}
                value={searchValue}
              />
              <ErrorButton onClick={errorCalling} />
            </div>
            <SelectBar 
              onChange={onSelectChange} 
              value={selectedLimit}
            />
          </section>
          <section id="main-section">
            <div id="sidebar">
              {data.length > 0 ? <CharacterList data={data}/> : <h2 className="noresult">No results</h2>}
            </div>
            <div id="detail"></div>
          </section>
          
        </div>
      )}
    </>
  );
}


export default App;
