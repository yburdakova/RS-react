
import './App.css';
import { useAppSelector } from './hooks/redux';

function App() {

  const {isLoading} = useAppSelector(state => state.userReducer)

  return (
    <>
      <div className="card">
        {isLoading ? 'Loading true' :  'Loading false' }
      </div>

    </>
  );
}

export default App;
