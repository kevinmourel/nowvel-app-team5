import novel from '../data/novel.json'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from "react";

import ListEpisode from '../components/ListEpisode';
import Header from '../components/Header';

function Detail() {
    const {id} = useParams()

    const data = novel.data.find(item => item.id === id )

    const {title, episode} = data
    
    return(
        <>
            <div className='container'>  
                <Header data={data}/>         
                <ListEpisode title={title} episode={episode}/>
            </div>
        </> 
    )
}
export default Detail;