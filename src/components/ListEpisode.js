import { Link } from "react-router-dom";

function ListEpisode({title, episode}) {

    return(
        <>
            <h2 className="mb-3">Episode : </h2>
            {episode.map((item) => (
                <div>
                    <ul className="list-group">
                    <Link to={`/detail/${title}/watch/${item.id}`} style={{ textDecoration: 'none' }}>
                        <li className="list-group-item ">
                            <span className="badge bg-primary mx-3">{item.episode}</span>
                            {item.title}
                        </li>
                    </Link>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default ListEpisode;