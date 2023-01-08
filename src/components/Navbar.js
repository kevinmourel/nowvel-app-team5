import { Link, useLocation } from "react-router-dom";

function Navbar({search,setSearch}) {

    const location = useLocation()
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <a className="navbar-brand text-light" href="/">Novwel</a>
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
                        { location.pathname === '/' && 
                        <div className="d-flex">
                            <input className="form-control me-2" type="text" name="search" placeholder="Search..." aria-label="Search" value={search} onChange={handleChange}/>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar