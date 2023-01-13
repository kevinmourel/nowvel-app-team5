import novel from '../data/novel.json'
import { useParams } from 'react-router-dom'

import Header from '../components/Header';

function Search() {
    const {search} = useParams()

    const data = novel.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase().trim()))

    
    return(
        <>
            <div className='container'>  
                <h2 className="my-3">Found {data.length} results : </h2>
                <Header data={data}/>         
            </div>
        </> 
    )
}
export default Search;