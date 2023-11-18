import Loader from '../Loader/Loader';
import { DataState, Character } from '../../types/data';
import './CharacterList.css'

const CharacterList = ({loading, error, data}: DataState) => {

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
                        {data.results.map((character : Character) => (
                            <li key={character.id} >
                                <a href="" className="">{`${character.id}. ${character.name}`}</a>
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