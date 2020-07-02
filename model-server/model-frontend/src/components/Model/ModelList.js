import React from 'react'

const ModelList = (props) => {
    return (
        <div>
           <ul className='collection with-header'>
               <li className='collection-header'><h5>Filters</h5></li>
                {/* {props.model.map(item =>{
                    return <a href="/" className='collection-item' key={item._id}
                        onClick={props.updateCurrentModel.bind(this,item)} >
                            {item.firstName} {item.lastName}
                        </a>
                
                })} */}
                
                <a href="/" className='collection-item'  >Nihar Mishra   </a>
           </ul>
        </div>
    )
}

export default ModelList
