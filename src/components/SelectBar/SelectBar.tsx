import './SelectBar.css'
import { SelectBarProps } from '../../constants/interfaces';

const limitOptions = ["10", "20", "50", "100"];

function SelectBar({onChange, value}: SelectBarProps) {
    
    return (
        <div className='select-container'>
            <label htmlFor='itemPerPage'>Number of items shown per page: </label>
            <select
                value={value}
                onChange={onChange}
                id='itemPerPage'
                data-testid='itemPerPage'
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