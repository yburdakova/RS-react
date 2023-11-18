import { Link, Outlet } from 'react-router-dom'
import './CharactersInfo.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const CharactersInfo: React.FC = ( ) => {

    const {limit, data, page} = useTypedSelector(state => state.data)
    const {setPage} = useActions()

    const pagesList = Array.from({ length: Math.ceil(data.info.count/limit) }, (_, index) => index + 1);

    return (
        <section id="main-section">
            <div id="pages">
                <div className="pages-title">Pages:</div>
                {pagesList.map( p => (
                    <Link 
                        key={`page-${p}`}
                        to={`/page/${p}`} 
                        className={p === page? "page-link-active" : "page-link"} 
                        onClick={()=> setPage(p)}
                    >
                        { p }
                    </Link>
                ))}
            </div>
            <Outlet/>
        </section>
    )
}

export default CharactersInfo