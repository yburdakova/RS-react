import './InfoItem.css';
import { InfoItemProps } from '../../constants/interfaces';


function InfoItem({ title, infodata } :InfoItemProps) {
  
  return (
    <div className="info-container">
        <span className="subtitle">{title}: </span>
        {infodata}
      </div>
  )
}

export default InfoItem
