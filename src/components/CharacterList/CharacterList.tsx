import { CharacterProps } from "../../constants/interfaces"
import { useParams } from "react-router-dom";
import './CharacterList.css'

function CharacterList({ data, first }: { data: CharacterProps[][], first: boolean }) {

    const { id }  = useParams<"id">();
    const pageNumber = first ? 0 : id ? parseInt(id, 10) - 1 : 0; 
    const infoForPage = data[pageNumber];

    return (
        <nav>
            <ul>
                {infoForPage.map((item, index) => (
                    <li key={index}>
                        <a href="#">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
    </nav>
    )
}

export default CharacterList