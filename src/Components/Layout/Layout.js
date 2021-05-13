//Layout for the app
import React ,{useRef,useState,useEffect} from 'react'
import SideNavbar from '../Sidenavbar/Sidenavbar'
import Dashboard from '../Dashboard/Dashboard'
import Mobile_nav from '../mobile/navbar/Navbar'
import More_Recepie from '../More_Recepies/More_Recepies'
import {search,Snack} from '../api/api'
import './Layout.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Recipe_container from '../Recipe_container/Recipe_container'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import {time} from '../Calculatetime/time'
export default function Layout(){

    //state for setting the dishes on app
    const [data,setdata]=useState(null)
    //state for mobile navbar for open and close
    const[opennavbar,setopennavbar]=useState(false)
    //state for setting the food type
    const [foodtime,setfoodtime]=useState('')
    //state for setting the food name
    //First setting the name to dish
    //It changes when searching the food.
    const [food,setfood]=useState('dish')
    //State to showing the snackbar
    const [showsnackbar,setshowsnackbar]=useState(false)
    //state for showing the loaders
    const [showloading,setshowloading]=useState(false)

    //useeffect hook to set the type according to time and search the food and set the data
    useEffect(()=>{
        const type=time()
        setfoodtime(type)
       search(food,type).then((res)=>{
           if(!res){
                setshowsnackbar(true)
           }
           else{
            setdata(res)
           }
            // console.log(res)
       })
    },[])
    const Input=useRef()
    //Function for searching the dish
    const searchall=()=>{
        setfood(Input.current.value)
        if(Input.current.value!=''){
        setshowloading(true)
           search(Input.current.value,foodtime).then((res)=>{
               setshowloading(false)
               if(!res){
                   setshowsnackbar(true)
               }
               else{
                setdata(res)
               }
           })
        }
        else{
            setshowsnackbar(true)
        }
            
    }
      //Function for searching the dish in mobile
    const searchinmobile=(value)=>{
        setfood(value)
        setshowloading(true)
        search(value,foodtime).then((res)=>{
            setshowloading(false)
            if(!res){
                setshowsnackbar(true)
            }
            else{
             setdata(res)
            }
        })
    }
    //Function to change the type 
    // @parmas(type of food)
    const changetype=(type)=>{
        setshowloading(true)
            search(food,type).then((res)=>{
                setshowloading(false)
                if(!res){
                    setshowsnackbar(true)
                }
                else{
                    setdata(res)
                }
       }) 
    }
    //Function for opening the navbar in mobile
    const opennav=()=>{
        if(!opennavbar){
            document.getElementById('mobile_nav').style.left=0
            setopennavbar(true)
        }
        else{
            document.getElementById('mobile_nav').style.left='-85%'
            setopennavbar(false)
        }
    }
    return(
        <div id='Top'>
            {showsnackbar?<Snack show={showsnackbar} setshow={setshowsnackbar}/>:<div></div>}
            <Mobile_nav searchfun={searchinmobile} change={changetype} fun={opennav} type={foodtime} typefun={setfoodtime}/>
            <div className='header'>
                <div onClick={()=>opennav()} className='Toogle_button'>
                <ToggleButton   value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon/>
                    </ToggleButton>
                </div>
            <h1 className='heading'>COOKBOOK</h1>
            <div className='Input_container'>
            <input ref={Input} placeholder='Search Recipe'></input>
            <div onClick={()=>searchall()} style={{cursor:"pointer"}}>
            <SearchIcon style={{color:'grey'}} />
            </div>
            </div>
            </div>
            <div>
                <div className='Layout'>
                <SideNavbar type={foodtime} typefun={setfoodtime} change={changetype}/>
                <div>
                {showloading?  <div style={{display:"flex",justifyContent:"center"}}><CircularProgress/></div>:<div></div>}
                <Dashboard reciepe_data={data}/>
                </div>
                <div></div>
                <Recipe_container data={data}/>
                <div></div>
                </div>
                {data? <More_Recepie set={setdata} reciepe_data={data}/>:<div></div>}
            </div>
        </div>
    )
}