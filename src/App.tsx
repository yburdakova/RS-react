
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { useAppSelector } from './hooks/redux';
import { ControlledForm, Home, Layout, NoPage, UncontrolledForm } from './pages'

function App() {

  // const {isLoading} = useAppSelector(state => state.userReducer)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
        <Route path="/controlled-form" element={<ControlledForm />} />
      </Route>
      <Route path="*" element={<NoPage/>} />
    </Routes>
  );
}

export default App;