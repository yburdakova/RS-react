import { Component } from 'react';
import './CharacterCard.module.css';
import { CharacterProps } from '../../constants/interfaces';
import InfoItem from '../InfoItem/InfoItem';

class CharacterCard extends Component<CharacterProps> {
  render() {
    const { name, height, mass, birth_year } = this.props;

    return (
      <div className="card">
        <h2 className="title">{name}</h2>
        <InfoItem title="Year of birth" infodata={birth_year} />
        <InfoItem title="Height" infodata={height} />
        <InfoItem title="Weigh" infodata={mass} />
      </div>
    );
  }
}

export default CharacterCard;
