//container to store the Recipe instruction

import React ,{useRef,useEffect} from 'react'
import parse from 'html-react-parser'
import './Recipe_container.css'
export default function Recipe_container({data}) {
    const reference =useRef()
    useEffect(()=>{
            const height=reference.current.offsetHeight
            console.log(height)
            if(height<200) document.getElementById('recipe_container').style.height='300px';
            else if(height>200 &&height<400)document.getElementById('recipe_container').style.height='400px'
            else document.getElementById('recipe_container').style.height='600px'
    })
        return (
            <div id='recipe_container' className='Recepie_container'>
                <h1>Recipe</h1>
                <div ref={reference}>{parse(data.summary)}</div>
            </div>
        )
  
   
}
