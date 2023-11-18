import React, { useEffect } from 'react';
import { ErrorButton, ProductsList, SearchBar, SelectBar} from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useActions } from './hooks/useActions';
import CharactersInfo from './components/CharactersInfo/CharactersInfo';

const App: React.FC = () => {

  const {fetchData} = useActions();

  useEffect(() =>{
      fetchData()
  }, [])


  return (
    <>
        <div className="container">
          <section id="top-section">
            <div className="search_container">
              <SearchBar/>
              <ErrorButton/>
            </div>
            <SelectBar/>
          </section>
          <Routes>
            <Route path="/" element={<CharactersInfo/>}>
              <Route index element={<ProductsList />}/>
              <Route path="/page/:id" element={<ProductsList/>}/>
            </Route>
          </Routes>
        </div>
    </>
  );
}


export default App;
