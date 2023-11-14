import React from 'react';
import { Loader, SearchBar, ErrorButton, SelectBar, CharactersInfo, CharacterList} from './components';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import useData from './hooks/useData';
import { SearchContext } from './context/dataContext';

const App: React.FC = () => {

  const {
    loading,
    searchValue,
    searchRequest,
    selectedLimit,
    infoData,
    errorCalling,
    onSearchChange,
    onSelectChange,
    onSearchSubmit,
  } = useData();

  return (
    <> 
      <SearchContext.Provider value={{infoData, searchRequest}}>
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
            {infoData&&infoData.length > 0 
              ?  <Routes>
                    <Route path="/" element={<CharactersInfo />}>
                      <Route index element={<CharacterList first/>}/>
                      <Route path="/page/:id" element={<CharacterList first={false}/>}>
                        
                      </Route>
                    </Route>
                </Routes>
              : <h2 className="noresult">No results</h2>
            }
          </div>
        )}
      </SearchContext.Provider>
    </>
  );
}

export default App;
