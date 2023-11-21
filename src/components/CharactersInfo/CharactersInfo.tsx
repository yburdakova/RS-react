import { Link, Outlet } from 'react-router-dom'
import './CharactersInfo.css'
import { useActions } from '../../hooks/useActions';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';

const CharactersInfo: React.FC = ( ) => {

    const {limit, data, page, searchQuery} = useAppSelector( state => state.dataReducer)
    const {setPage, fetchData} = useActions()

    const pagesList = Array.from({ length: Math.ceil(data.info.count/limit) }, (_, index) => index + 1);

    useEffect(() =>{
        fetchData(searchQuery, page)
    }, [page])

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