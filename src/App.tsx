import React, { useState, useEffect } from 'react';
import { Loader, SearchBar, CharacterCard, ErrorButton } from './components';
import { AppProps, CharacterProps } from './constants/interfaces';
import './App.css';

const App: React.FC<AppProps> = () => {
  const savedSearchRequest = localStorage.getItem('searchRequest');

  const [data, setData] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(savedSearchRequest || '');
  const [searchRequest] = useState(savedSearchRequest || '');
  const [isError, setIsError] = useState(false);


  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchRequest', searchValue);
    fetchResults(searchValue);
  };

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


    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
      .then((result) => result.json())
      .then((data) => {
        setData(data.results);
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
            <SearchBar
              onChange={onSearchChange}
              onSubmit={onSearchSubmit}
              value={searchValue}
            />
            <ErrorButton onClick={errorCalling} />
          </section>
          {data.length > 0 ? (
            <section id="main-section" className="cards-container">
              {data.map((item, index) => (
                <CharacterCard
                  key={index}
                  name={item.name}
                  height={item.height}
                  mass={item.mass}
                  birth_year={item.birth_year}
                />
              ))}
            </section>
          ) : (
            <h2 className="noresult">
              Unfortunately, your search returned no results
            </h2>
          )}
        </div>
      )}
    </>
  );
};

export default App;
