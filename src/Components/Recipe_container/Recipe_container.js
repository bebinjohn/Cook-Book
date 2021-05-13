//container to store the Recipe instruction

import React from 'react'
import parse from 'html-react-parser'
import './Recipe_container.css'
export default function Recipe_container({data}) {
    if(data){
        return (
            <div className='Recepie_container'>
                <h1>Recipe</h1>
                <div>{parse(data.summary)}</div>
            </div>
        )
    }
    else return <div></div>
   
}
