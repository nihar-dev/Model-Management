import React,{useState,useEffect} from 'react';
import ModelSingle from '../Model/ModelSingle'
import axios from  'axios';

export default function SearchTemplate(props) {


  return (
      <div>
        <ul>
          {
            props.data.map(item => <ModelSingle items = {item} />)
              
                
                // <li key={item._id}>{item.firstName}</li>
              
               
          }
        </ul>
      </div>

    // 
  )
}




