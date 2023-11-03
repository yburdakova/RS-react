import { CharacterProps } from "../../constants/interfaces"
import './CharacterList.css'
function CharacterList({ data }: { data: CharacterProps[] }) {
    return (
        <nav>
            <ul>
                {data.map((item, index) => (
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