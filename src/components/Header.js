function Header({data}) {
    return(
        <>
        <div className='row'>    
            <div className="col-12 my-3">
                    <div className="card" >                         
                        <div className="row">
                            <div className="col-md-2">
                            <img className="img-fluid rounded-start" src={data.image} alt={data.title}/>  
                            </div>
                            <div className="col-md-10 ">
                                <div className="card-body">
                                    <h2 className="card-title text-dark d-flex">
                                        <span className="me-3">{data.title}</span> 
                                    {
                                        Array.apply(null, { length: data.rating }).map((e, i) => (
                                            <i className="bi bi-star-fill text-warning ml-3" key={i}/>
                                        ))
                                    }  
                                    </h2>
                                    <p className="card-text text-dark mb-4" >{data.description}</p>

                                    <h5 className="position-absolute bottom-0">
                                        <span className="me-3"><i className="bi bi-fire text-danger"/>{data.viewed}</span>
                                        <span><i className="bi bi-hand-thumbs-up text-success"/>{data.liked}</span>
                                    </h5>  
                                </div>
                            </div>                                        
                        </div>    
                    </div>
            </div>    
        </div>
        </>
    )
}
export default Header