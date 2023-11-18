import './CharacterCard.css'
import { CharacterProps } from '../../types/interfaces';
import InfoItem from '../InfoItem/InfoItem';
import { useEffect, useState } from 'react';

function CharacterCard({ data } : { data: CharacterProps }) {

  const [showCard, setShowCard] = useState(false)

  const handleCloseCard = () => {
    setShowCard(false)
  }

  useEffect(()=>{
    data.name && setShowCard(true)
  },[])
  
  return (
    <div className="card-container">
      {
        showCard
        ? <div className="card-info">
            <button className="close-card-button" onClick={handleCloseCard}>&#10005;</button>
            <h2 className="title">{data.name}</h2>
            <InfoItem title="Year of birth" infodata={data.birth_year} />
            <InfoItem title="Height" infodata={data.height} />
            <InfoItem title="Weigh" infodata={data.mass} />
          </div>
        : ""
      }
    </div>
  );
}

export default CharacterCard
