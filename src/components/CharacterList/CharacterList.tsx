import { CharacterProps } from "../../constants/interfaces"
import { useParams } from "react-router-dom";
import './CharacterList.css'
import { useEffect, useState } from "react";
import { fetchPeople } from "../../api/api";
import { CharacterCard, Loader } from "../";

function CharacterList({ data, first }: { data: CharacterProps[][], first: boolean }) {

    const { id }  = useParams<"id">();
    const pageNumber = first ? 0 : id ? parseInt(id, 10) - 1 : 0; 
    const infoForPage: CharacterProps[] = data[pageNumber];

    const [peopleUrl, setPeopleUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [peopleData, setPeopleData] = useState<CharacterProps>({});

    const handleGetCardInfo = (peopleUrl: string) => {
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
                            <li key={index} onClick={() => item.url && setPeopleUrl(item.url)}>
                                <a href="#">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                {loading? <Loader/> : <CharacterCard  data={peopleData} />}
            </div>
        </div>
        
    )
}

export default CharacterList

{/*
<Route path="/people/:id" element={<CharacterCard data={infoData}/>}/> 
Link to={`/people/${index+1}`}
*/}