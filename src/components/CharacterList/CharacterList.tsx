import { CharacterProps } from "../../constants/interfaces"
import { useParams } from "react-router-dom";
import './CharacterList.css'
import { useContext, useEffect, useState } from "react";
import { fetchPeople } from "../../api/api";
import { CharacterCard, Loader } from "../";
import { SearchContext } from "../../context/dataContext";

function CharacterList({ first }: {  first: boolean }) {

    const {infoData} = useContext(SearchContext);

    const { id }  = useParams<"id">();
    const pageNumber = first ? 0 : id ? parseInt(id, 10) - 1 : 0; 
    const infoForPage: CharacterProps[] = infoData[pageNumber];

    const [peopleUrl, setPeopleUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [peopleData, setPeopleData] = useState<CharacterProps>({});

    const handleGetCardInfo = (peopleUrl: string) => {
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

    const handleClickListItem = (itemUrl: string) => {
        setPeopleUrl(itemUrl);
    }

    useEffect(() => {
        if (peopleUrl) {
            setLoading(true);
            handleGetCardInfo(peopleUrl);
        }
    }, [peopleUrl]);

    

    return (
        <div id="data-info">
            <div id="sidebar">
                <nav>
                    <ul>
                        {infoForPage.map((item, index) => (
                            <li key={index} onClick={() => item.url && handleClickListItem(item.url)}>
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