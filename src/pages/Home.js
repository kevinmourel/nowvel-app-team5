import novel from '../data/novel.json'
import { useState, useEffect } from "react";


import Card from '../components/Card';
import Banner from '../components/Banner';
import Label from '../components/Label';

function Home({search}) {
 
    const [data, setData] = useState([])

    const [label, setLabel] = useState([])

    const [selectedLabel, setSelectedLabel] = useState("")

    useEffect(() => { 
        if(selectedLabel){
            const rawData = novel.data.filter(item => item.genre === selectedLabel)
            setData(rawData)
            if(search){
                const newData = rawData.filter(item => item.title.toLowerCase().includes(search.toLowerCase().trim()))
                setData(newData)
            }
            
        }else{
            if(search){   
                const newData = novel.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase().trim()))
                setData(newData)
            } else{
                let labels = [...new Set(novel.data.map(item => item.genre))];
                setLabel(labels) 
                const newData = novel.data
                setData(newData)
            }  
        }
    }, [search, selectedLabel])
    
  
    return(
        <>
            <Banner data={novel.data}/>    
            <div className='container'>
                <Label data={label} selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel}/>
                <Card data={data}/>  
            </div> 
        </> 
    )
}
export default Home;