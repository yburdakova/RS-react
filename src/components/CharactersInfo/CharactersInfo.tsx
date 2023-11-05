import { Link, Outlet } from 'react-router-dom'
import { CharacterProps } from '../../constants/interfaces'

function CharactersInfo({ data  } :  { data: CharacterProps[][] }) {

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
            <Outlet/>
        </section>
    )
}

export default CharactersInfo