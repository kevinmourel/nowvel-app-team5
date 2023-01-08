import { Link } from "react-router-dom";

function Card({data}) {
    return(
        <>
        <div className='row'>
            {data.map((item, id) => (       
                    <div className="col-12 col-md-3 mb-3" key={id}>
                        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card" >
                                <img className="card-img-top" src={item.image} alt={item.title}/> 
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{item.title}</h5>
                                    <p className="card-text text-dark mb-4" ><small>{`${item.description.substring(0, 80)}...`}</small></p>
                                    <h6 className="position-absolute bottom-0">
                                        <span className="me-2"><i className="bi bi-fire text-danger"/>{item.viewed}</span>
                                        <span><i className="bi bi-hand-thumbs-up text-success"/>{item.liked}</span>
                                    </h6> 
                                </div> 

                            </div>
                        </Link>
                    </div>    
                ))}
        </div>
        </>
    )
}
export default Card;