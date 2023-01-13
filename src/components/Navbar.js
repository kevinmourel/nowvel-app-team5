import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({searchParams, setSearchParams}) {

    const location = useLocation()
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchParams(e.target.value)
    }

    const handleClick = () => {
        navigate(`/search/${searchParams}`)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    { location.pathname === '/' 
                        ? <a className="navbar-brand text-light fs-4" href="/">Nowvel <small style={{fontSize:'16px'}}>by novelku</small></a>
                        :  <h2 onClick={() => navigate(-1)} style={{cursor:'pointer'}}><i class="bi bi-arrow-left-circle text-light fw-bold"/></h2>
                    }
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            {/* <li className="nav-item active">
                                <Link to={`/`} style={{ textDecoration: 'none' }} className="nav-link text-light">
                                    Home
                                </Link>
                            </li> */}
                        </ul>
                        {/* { location.pathname === '/' &&  */}
                        <div className="d-flex">
                            <input className="form-control me-2" type="text" name="search" placeholder="Search..." aria-label="Search" value={searchParams} onChange={handleChange}/>
                            <button class="btn btn-light" onClick={handleClick}>Search</button>
                        </div>
                        {/* } */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar