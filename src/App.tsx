import React, { useEffect } from 'react';
import { ProductsList, SelectBar} from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import CharactersInfo from './components/CharactersInfo/CharactersInfo';

const App: React.FC = () => {

  const {data, error, loading, limit} = useTypedSelector(state => state.data);
  const {fetchData} = useActions();

  useEffect(() =>{
      fetchData()
  }, [])


  return (
    <>
        <div className="container">
          <section id="top-section">
            <div className="search_container">
              <div className="">search bar</div>
              <div className="">error button</div>
            </div>
            <SelectBar/>
          </section>
          <Routes>
            <Route path="/" element={<CharactersInfo/>}>
              <Route index element={<ProductsList loading={loading} error={error} data={data}/>}/>
              <Route path="/page/:id" element={<ProductsList loading={loading} error={error} data={data}/>}/>
            </Route>
          </Routes>
        </div>
    </>
  );
}


export default App;
