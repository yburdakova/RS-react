import { Link, Outlet } from 'react-router-dom'
import { CharacterProps } from '../../constants/interfaces'

function CharactersInfo({ data  } :  { data: CharacterProps[][] }) {

    console.log (data.length)
    return (
        <section id="main-section">
            <div id="pages">
                <div className="pages-title">Pages:</div>
                {data.map((_, index) => (
                    <Link to={`/page/${index+1}`} className="page-link" key={`page-${index+1}`}>
                        { index +1 }
                    </Link>
                ))}
                </div>
                <div id="data-info">
                <div id="sidebar">
                    <Outlet/>
                </div>
                <div id="detail"></div>
            </div>
        </section>
    )
}

export default CharactersInfo