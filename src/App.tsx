import React from 'react';
import { Loader, SearchBar, ErrorButton, SelectBar, CharactersInfo, CharacterList} from './components';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import useData from './hooks/useData';

const App: React.FC = () => {

  const {
    loading,
    searchValue,
    selectedLimit,
    infoData,
    errorCalling,
    onSearchChange,
    onSelectChange,
    onSearchSubmit,
  } = useData();

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
                    <Route path="/page/:id" element={<CharacterList data={infoData} first={false}/>}>
                      
                    </Route>
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
