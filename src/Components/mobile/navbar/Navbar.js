
//Component for mobile Navbar
import React,{useRef} from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search';
export default function Navbar({fun,searchfun,change,type,typefun}) {
    const input=useRef()

    //props function from layout.js
    //search the dish with the current value
    const searchmobile=()=>{
        searchfun(input.current.value)
        document.getElementById('mobile_nav').style.left='-85%'
    }

    //@params(type_name)
    //sets the type to recent type
    const settype =(id)=>{
            typefun(id)
            change(id)
            document.getElementById('mobile_nav').style.left='-85%'
    }
    return (
        <div id='mobile_nav' className='Navbar_container'>
           <div className='header_container'>
               <h1>COOKBOOK</h1>
               <div onClick={()=>fun()}>&#10006;</div>
           </div>
           <div className='navbar_input_contianer'>
               <input ref={input} placeholder='Search Recipe'></input>
               <div  onClick={()=>searchmobile()} style={{cursor:"pointer"}}>
            <SearchIcon style={{color:'grey'}} />
            </div>
           </div>
           <div className='Navbar_type'>
               <h2>Type</h2>
               <nav>
                   <div onClick={()=>settype('breakfast')} style={type==='breakfast'?{color:"black"}:null}>Breakfast</div>
                   <div  onClick={()=>settype('main course')} style={type==='main course'?{color:"black"}:null}>Lunch</div>
                   <div  onClick={()=>settype('salad')} style={type==='salad'?{color:"black"}:null}>Dinner</div>
               </nav>
           </div>
        </div>
    )
}
