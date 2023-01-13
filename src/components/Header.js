import { Link } from "react-router-dom";

function Header({data}) {
    return(
        <>
        <div className='row'> 
        {data.map((item, id) => (    
            <div className="col-12 my-3" key={id}>
                <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" >                         
                        <div className="row">
                            <div className="col-md-2 text-center">
                            <img className="img-fluid rounded-start" src={item.image} alt={item.title}/>  
                            </div>
                            <div className="col-md-10 ">
                                <div className="card-body">
                                    <h2 className="card-title text-dark d-flex">
                                        <span className="me-3">{item.title}</span> 
                                    {
                                        Array.apply(null, { length: item.rating }).map((e, i) => (
                                            <i className="bi bi-star-fill text-warning ml-3" key={i}/>
                                        ))
                                    }  
                                    </h2>
                                    <p className="card-text text-dark mb-4" >{item.description}</p>

                                    <h5 className="position-absolute bottom-0">
                                        <span className="me-3"><i className="bi bi-fire text-danger"/>{item.viewed}</span>
                                        <span><i className="bi bi-hand-thumbs-up text-success"/>{item.liked}</span>
                                    </h5>  
                                </div>
                            </div>                                        
                        </div>    
                    </div>
                 </Link>
            </div>  
            ))}  
        </div>
        </>
    )
}
export default Header