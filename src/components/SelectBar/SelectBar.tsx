import './SelectBar.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const limitOptions = [10, 20, 40, 60, 100]; 

const SelectBar: React.FC = ( ) => {

    const { limit } = useTypedSelector(state => state.data)
    const {setLimit} = useActions()
    
    
    return (
        <div className='select-container'>
            <h3 className="">Number of items shown per page: </h3>
            <select
                value={limit}
                onChange={(e) => setLimit(parseInt(e.target.value))}
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