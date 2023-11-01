import styles from './CharacterCard.module.css';
import { CharacterProps } from '../../constants/interfaces';
import InfoItem from '../InfoItem/InfoItem';

function CharacterCard({ name, height, mass, birth_year } : CharacterProps) {
  
  return (
    <div className={styles.card}>
      <h2 className="title">{name}</h2>
      <InfoItem title="Year of birth" infodata={birth_year} />
      <InfoItem title="Height" infodata={height} />
      <InfoItem title="Weigh" infodata={mass} />
    </div>
  );
}

export default CharacterCard
