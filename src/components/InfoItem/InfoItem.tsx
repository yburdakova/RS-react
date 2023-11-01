import { Component } from 'react';
import './InfoItem.module.css';
import { InfoItemProps } from '../../constants/interfaces';

class InfoItem extends Component<InfoItemProps> {
  render() {
    const { title, infodata } = this.props;

    return (
      <div className="info-container">
        <span className="subtitle">{title}: </span>
        {infodata}
      </div>
    );
  }
}

export default InfoItem;
