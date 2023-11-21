import './CharacterCard.css'
import InfoItem from '../InfoItem/InfoItem';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/redux';


const CharacterCard: React.FC = ( ) => {

  const {data, loading, error, currentId, isShown} = useAppSelector( state => state.characterReducer)

  const { fetchCharacter, setIsShown} = useActions()


  useEffect(()=>{
    console.log("CharacterCard useEffect - currentId:", currentId);
    currentId && fetchCharacter(currentId)
  },[currentId])

  if (loading) {
    return <Loader/>
  }

  if (error) {
      return <h1>{error}</h1>
  }
  
  return (
    <div className="card-container">
      {
        isShown
        ? <div className="card-info">
            <button className="close-card-button" onClick={()=> setIsShown(false)}>&#10005;</button>
            <h2 className="title">{data.name}</h2>
            <img src={data.image} alt={`image of ${data.name}`}/>
            <InfoItem title="Species" infodata={data.species} />
            <InfoItem title="Gender" infodata={data.gender} />
            
          </div>
        : ""
      }
    </div>
  );
}

export default CharacterCard
