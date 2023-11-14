import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../../context/dataContext'

function CharactersInfo() {
    
    const {infoData} = useContext(SearchContext);

    return (
        <section id="main-section">
            <div id="pages">
                <div className="pages-title">Pages:</div>
                {infoData.map((_, index) => (
                    <Link to={`/page/${index+1}`} className="page-link" key={`page-${index+1}`}>
                        { index +1 }
                    </Link>
                ))}
            </div>
            <Outlet/>
        </section>
    )
}

export default CharactersInfo