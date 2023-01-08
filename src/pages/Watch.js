import novel from '../data/novel.json'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

function Watch() {

    const {title, id} = useParams()

    
    const data = novel.data.find(item => item.title === title)
    const index = data.episode.findIndex(eps => eps.id === id)
      
    return(
        <>
            <div className='container'>
                <div className='text-center my-3'>
                    <img src={data.image}/>         
                </div>
                <div className='my-5'>
                    <h1>{data.episode[index].title}</h1>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{data.episode[index].content}</p>
                </div>
            </div> 
            <div className='sticky-bottom p-4 bg-light bg-gradient'>
                <div className='d-flex justify-content-evenly'>
                    { data.episode[index - 1] &&
                        <Link to={`/detail/${title}/watch/${data.episode[index - 1].id}`} className='btn btn-outline-secondary col-6 col-md-4' style={{ textDecoration: 'none' }}>
                            Previous Episode {data.episode[index - 1].episode}
                        </Link>
                    }

                    { data.episode[index + 1] &&
                    <Link to={`/detail/${title}/watch/${data.episode[index + 1].id}`} className='btn btn-outline-primary col-6 col-md-4' style={{ textDecoration: 'none' }}>
                        Next Episode {data.episode[index + 1].episode}
                    </Link>
                    }
                </div>
            </div>
        </>
    )
}
export default Watch;