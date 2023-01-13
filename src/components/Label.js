function Label({data, selectedLabel, setSelectedLabel}) {


    return(
        <div className='py-3' style={{ cursor: 'pointer' }}>
            {data.map((item, id) => (    
                <div className="btn-group">   
                    <button 
                        type="button" 
                        className={ selectedLabel === item ? 'btn btn-primary rounded-pill me-2' : 'btn btn-outline-primary rounded-pill me-2' } 
                        onClick={() => selectedLabel === item ? setSelectedLabel('') : setSelectedLabel(item)}
                        >
                        <span>{item}</span>
                    </button>
                </div>
                
                ))}
        </div>
    )

}

export default Label;