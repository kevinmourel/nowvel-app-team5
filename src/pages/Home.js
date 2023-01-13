import novel from '../data/novel.json'
import { useState, useEffect } from "react";


import Card from '../components/Card';
import Banner from '../components/Banner';
import Label from '../components/Label';

function Home() {
 
    const [data, setData] = useState([])

    const [label, setLabel] = useState([])

    const [selectedLabel, setSelectedLabel] = useState("")

    useEffect(() => { 
        if(selectedLabel){
            const newData = novel.data.filter(item => item.genre === selectedLabel)
            setData(newData)
        }else{  
            let labels = [...new Set(novel.data.map(item => item.genre))];
            setLabel(labels) 
            const newData = novel.data
            setData(newData)
        }
    }, [selectedLabel])
    
  
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