
//Component for ingredients on dashboard

import React,{useEffect,useState} from 'react'
import {Button} from '@material-ui/core'
import './dashboard.css'
import Dialog from '../mobile/Recipe_Dialog/Recipe_Dialog'
export default function Ingredients({data}) {
    //state for opening the Dialog on mobile
    const [opendialog,setopen]=useState(false)
    useEffect(()=>{
        opensmall()
    })

    //Function set minimum indredients
    const opensmall=()=>{
        const $button=document.getElementById('each_container')
        if(window.innerWidth>1000){
        $button.style.height='140px'
        }
        else{
            $button.style.height='150px'
        }
        $button.style.overflowY='hidden'
        document.getElementById('button').style.display='block'
    }

    //Function to show all the Ingredients
    const openall=()=>{
            const $button=document.getElementById('each_container')
            $button.style.height='100%'
            document.getElementById('button').style.display='none'
        
 }
    
    //Component to show all the ingredients
    const Each_ingredients=data.main.ingredients.map((each,index)=>{
        return(
            <div key={index} className="Ingredient_Each_container">
            <div className='Each_image'><img alt={each.name} src={`https://spoonacular.com/cdn/ingredients_100x100/${each.image}`}></img></div>
            <div className='Text_container'>
                <p style={{textTransform:"capitalize"}}>{each.name}</p>
                <div>{each.originalString}</div>
            </div>
        </div>
        )
    })
    return (
        <>
        <Dialog data={data.summary} open={opendialog} setopen={setopen}/>
       <section className='Ingredients_container'>
           <h2>Ingredients</h2>
           <div  id='each_container'>
               {Each_ingredients}
           </div>
        <Button  id='button' onClick={()=>openall()} style={{background:"#408EBA",color:'white',fontFamily:"Roboto",textTransform:'capitalize',marginTop:"5px",marginBottom:"5px"}} variant='contained' >View all ingredients</Button>
        <div>
        {window.innerWidth<800? <Button onClick={()=>setopen(true)} style={{background:"#408EBA",color:'white',fontFamily:"Roboto",textTransform:'capitalize',marginTop:"5px",marginBottom:"5px",width:"130px"}} variant='contained' >Recipe</Button>:<div></div>}
        </div>
       </section>
       </>
    )
}
