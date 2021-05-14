//side navbar for selecting the type of food
import React from 'react'
import './sidenavbar.css'
export default function SideNavbar({type,typefun,change}){

    //@params(type_name)
    //set the state to recent types
    //Change to recent types
    const madeselect=(id)=>{
            typefun(id)
            change(id)
            document.getElementById('Top').scrollIntoView()
    }
        return(
            <div>
                <nav className="Side_navbar_container">
                    <div onClick={()=>madeselect('breakfast')} style={type==='breakfast'?{color:'black',borderBottom:"1px solid gray"}:null}>Breakfast</div>
                    <div  onClick={()=>madeselect('main course')}  style={type==='main course'?{color:'black',borderBottom:"1px solid gray"}:null}>Lunch</div>
                    <div onClick={()=>madeselect('salad')}  style={type==='salad'?{color:'black',borderBottom:"1px solid gray"}:null}>Dinner</div>
                </nav>
            </div>
        )
}