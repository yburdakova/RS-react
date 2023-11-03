import styles from './SelectBar.module.css';
import { SelectBarProps } from '../../constants/interfaces';

const limitOptions = [10, 20, 50, 100]; 

function SelectBar({onChange, value}: SelectBarProps) {
    return (
        <div className={styles.container}>
            <h3 className="">Number of items shown per page: </h3>
            <select
                value={value}
                onChange={onChange}
                >
                {limitOptions.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
            </select>
        </div>
        
    )
}

export default SelectBar