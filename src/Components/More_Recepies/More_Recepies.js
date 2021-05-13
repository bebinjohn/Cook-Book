//Component to show releated Recipes

import React,{useEffect,useRef} from 'react'
import './More_recepie.css'
import {parserelated} from '../api/api'

export default function More_Recepies({reciepe_data,set}) {
    const whole=useRef()

    //Apply animation when mouse on or leave
    useEffect(()=>{
            whole.current.addEventListener('mousemove',()=>{
                whole.current.style.animationPlayState='paused'
            })
            whole.current.addEventListener('mouseleave',()=>{
                whole.current.style.animationPlayState='running'
            })
    },[])

    //@params(id of the dish,each recipes)
    //Parserelated ->function in api.js
    //set the main dish to this  dish
    const setrelated=(id,each)=>{
            parserelated(reciepe_data,id,each).then((res)=>{
                set(res)
                document.getElementById('Top').scrollIntoView()
            })
    }
   
        //Component contains each_recipes
        const each_recipes=reciepe_data.more_recipies.map((each)=>{
            return(
            <div onClick={()=>setrelated(each.id,each)} key={each.id} className='Each_receipe'>
            <img src={each.image}></img>
            <div style={{textAlign:"center"}}>
            <p>{each.title}</p>
            <div>{each.readyInMinutes} min cooktime</div>
            </div>
        </div>
            )
         })
        return (
            <div  className='More_recepie_container'>
                <h1 className='More_recepie_heading'>More recipies</h1>
                <div className='Whole_recipe_container' >
                    <div className='animation' ref={whole}> {each_recipes}</div>
                </div>
            </div>
        )
    
}
