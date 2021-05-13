//Dash board for all the dishes
import React from 'react'
import Ingredients from './ingredients'
import Nutrition from './nutrition'
import './dashboard.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import parse from 'html-react-parser'
export default function Dashboard({reciepe_data}) {
    // console.log(reciepe_data)
    if(reciepe_data){
        return(
            <div id='Dashboard' className="Dash_Board_container">
            <div>
            <h1>{reciepe_data.main.title}</h1>
            <div className='Text' id='summary'>{parse(reciepe_data.main.summary)}</div>
                 {/* Ingredients */}
                 <Ingredients data={reciepe_data}/>
                 {/* Nutrition */}
                 <Nutrition data={reciepe_data}/>
                 </div>
                 <div>
               <img alt='image'  className='Image' src={reciepe_data.main.img}></img>
                </div>
        </div>
        )
    }
    else return (
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
      <CircularProgress />
    </div>
    )
}
