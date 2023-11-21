import Loader from '../Loader/Loader';
import { ICharacter } from '../../types/character';
import './CharacterList.css'
import { useActions } from '../../hooks/useActions';

import CharacterCard from '../CharacterCard/CharacterCard';
import { useAppSelector } from '../../hooks/redux';

const CharacterList = () => {

    const {loading, error, data, limit} = useAppSelector( state => state.dataReducer)

    const {setId} = useActions()

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
                        {data.results.slice(0, limit).map((character : ICharacter) => (
                            <li key={character.id} onClick={() => setId(character.id)}>
                                <a href="#" className="">{`${character.name}`}</a>
                            </li>
                            
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <CharacterCard/>
            </div>
        </div>
    )
}

export default CharacterList