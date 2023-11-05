import React, { useState, useEffect } from 'react';
import { Loader, SearchBar, ErrorButton, SelectBar, CharactersInfo, CharacterList } from './components';
import { AppProps, CharacterProps } from './constants/interfaces';
import './App.css';
import { fetchCharacters , chunkArray} from './api/api';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App: React.FC<AppProps> = () => {

  const savedSearchRequest = localStorage.getItem('searchRequest');
  const savedLimitRequest = localStorage.getItem('selectedLimit');
  const navigate = useNavigate();

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
    navigate('/');
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
          {infoData.length > 0 
            ?  <Routes>
                  <Route path="/" element={<CharactersInfo data={infoData}/>}>
                    <Route index element={<CharacterList data={infoData} first/>}/>
                    <Route path="/page/:id" element={<CharacterList data={infoData} first={false}/>}/>
                  </Route>
              </Routes>
            : <h2 className="noresult">No results</h2>
          }
        </div>
      )}
    </>
  );
}


export default App;
