
import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer } from './components';


function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;