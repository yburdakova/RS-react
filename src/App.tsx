import React, { useState, useEffect } from 'react';
import { Loader, SearchBar, ErrorButton, SelectBar, CharacterList } from './components';
import { AppProps, CharacterProps } from './constants/interfaces';
import './App.css';
import { fetchCharacters , chunkArray} from './api/api';

const App: React.FC<AppProps> = () => {
  const savedSearchRequest = localStorage.getItem('searchRequest');
  const savedLimitRequest = localStorage.getItem('selectedLimit');

  const [data, setData] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(savedSearchRequest || '');
  const [searchRequest, setSearchRequest] = useState(savedSearchRequest || '');
  const [isError, setIsError] = useState(false);
  const [selectedLimit, setSelectedLimit] = useState(savedLimitRequest || '10');
  const [initialLoad, setInitialLoad] = useState(true);
  const [infoData, setInfoData] = useState<CharacterProps[][]>([])
  


  useEffect(() => {  
    if (!initialLoad) {
      fetchResults(searchRequest);
    } else {
      setInitialLoad(false);
    }
  }, [initialLoad, searchRequest]);

  useEffect(() => {
    localStorage.setItem('selectedLimit', selectedLimit.toString());
    if (selectedLimit !== savedLimitRequest) {
      fetchResults(searchRequest);
    }
    
  }, [selectedLimit, savedLimitRequest]);

  useEffect(() => {
    if (isError) {
      throw new Error('Test error');
    }
  }, [isError]);

  const errorCalling = () => {
    setIsError(true);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLimit(e.target.value);
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchRequest(searchValue);
  };

  const fetchResults = (searchTerm: string) => {
    setLoading(true);
    localStorage.setItem('searchRequest', searchTerm);
    
    fetchCharacters(searchTerm)
      .then((results) => {
        setData(results);
        const chunkedData = chunkArray(results, selectedLimit);
        setInfoData(chunkedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  

// TEST STATE

useEffect(() => {
  console.log('searchRequest:', searchRequest);
  console.log('savedSearchRequest:', savedSearchRequest);
  console.log('savedLimitRequest:', savedLimitRequest);
}, [searchRequest]);

useEffect(() => {
  console.log('data:', data);
}, [data]);

useEffect(() => {
  console.log('loading:', loading);
}, [loading]);

useEffect(() => {
  console.log('searchValue:', searchValue);
}, [searchValue]);

useEffect(() => {
  console.log('isError:', isError);
}, [isError]);

useEffect(() => {
  console.log('selectedLimit:', selectedLimit);
}, [selectedLimit]);

useEffect(() => {
  console.log('initialLoad:', initialLoad);
}, [initialLoad]);

useEffect(() => {
  console.log('infoData:', infoData);
}, [infoData]);

// TEST STATE

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
            <div id="pages">
              <div className="pages-title">Pages:</div>
              {infoData.map((_, index) => (
                <a href="#" className="page-link" key={`page-${index}`}>
                  {index + 1}
                </a>
              ))}
            </div>
            <div id="data-info">
              <div id="sidebar">
                {data.length > 0 ? <CharacterList data={data}/> : <h2 className="noresult">No results</h2>}
              </div>
              <div id="detail"></div>
            </div>
          </section>
          
        </div>
      )}
    </>
  );
}


export default App;
