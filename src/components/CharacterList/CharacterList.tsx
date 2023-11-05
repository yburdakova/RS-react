import { CharacterProps } from "../../constants/interfaces"
import { useParams } from "react-router-dom";
import './CharacterList.css'
import { useEffect, useState } from "react";
import { fetchPeople } from "../../api/api";
import { CharacterCard, Loader } from "../";

function CharacterList({ data, first }: { data: CharacterProps[][], first: boolean }) {

    const { id }  = useParams<"id">();
    const pageNumber = first ? 0 : id ? parseInt(id, 10) - 1 : 0; 
    const infoForPage = data[pageNumber];

    const [peopleUrl, setPeopleUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [peopleData, setPeopleData] = useState([]);

    const handleGetCardInfo = (peopleUrl) => {
        console.log(peopleUrl)
        setLoading(true);
        
        fetchPeople(peopleUrl)
        .then((results) => {
            setPeopleData(results);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }

    useEffect(()=>{
        handleGetCardInfo(peopleUrl)
    },[peopleUrl])

    return (
        <div id="data-info">
            <div id="sidebar">
                <nav>
                    <ul>
                        {infoForPage.map((item, index) => (
                            <li key={index} onClick={() => setPeopleUrl(item.url)}>
                                <a href="#" >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                {loading? <Loader/> : <CharacterCard  name={peopleData.name} height={peopleData.heigh} mass={peopleData.mass} birth_year={peopleData.birth_year}/>}
            </div>
        </div>
        
    )
}

export default CharacterList