import { Link, Outlet } from 'react-router-dom'
import './CharactersInfo.css'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchData, setPage } from '../../store/reducers/dataActionCreators';
import { setId } from '../../store/reducers/characterActionCreators';

const CharactersInfo: React.FC = ( ) => {

    const {limit, data, page, searchQuery} = useAppSelector( state => state.dataReducer)
    const pagesList = Array.from({ length: Math.ceil(data.info.count/limit) }, (_, index) => index + 1);
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchData(searchQuery, page))
        dispatch(setId(0))
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
                        onClick={()=> dispatch(setPage(p))}
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