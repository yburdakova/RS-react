import React, { useEffect } from 'react';
import { ErrorButton, ProductsList, SearchBar, SelectBar} from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CharactersInfo from './components/CharactersInfo/CharactersInfo';
import { useAppDispatch } from './hooks/redux';
import { fetchData } from './store/reducers/dataActionCreators';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() =>{
      dispatch(fetchData())
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
