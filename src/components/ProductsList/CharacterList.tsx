import Loader from '../Loader/Loader';
import { Character } from '../../types/character';
import './CharacterList.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';

const CharacterList = () => {

    const {loading, error, data, limit} = useTypedSelector(state => state.data)

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div id="data-info">
            <div id="sidebar">
                <nav>
                    <ul>
                        {data.results.slice(0, limit).map((character : Character, index:number) => (
                            <li key={character.id} >
                                <a href="" className="">{`${index+1}. ${character.name}`}</a>
                            </li>
                            
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <div className="">character details</div>
            </div>
        </div>
    )
}

export default CharacterList