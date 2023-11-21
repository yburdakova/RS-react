import Loader from '../Loader/Loader';
import { ICharacter } from '../../types/character';
import './CharacterList.css'
import CharacterCard from '../CharacterCard/CharacterCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setId } from '../../store/reducers/characterActionCreators';

const CharacterList = () => {

    const {loading, error, data, limit} = useAppSelector( state => state.dataReducer)

    const dispatch = useAppDispatch();

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
                            <li key={character.id} onClick={() => dispatch(setId(character.id))}>
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