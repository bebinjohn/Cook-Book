
//Component to show the nutrients
import React from 'react'
import './dashboard.css'
import Countup from 'react-countup'
export default function Nutrition({data}) {
    
    return (
        <section className='Ingredients_container'>
            <h2>Nutritional Values</h2>
            <div style={{display:'flex',justifyContent:"space-around",width:"100%"}}>
                <div className="Nutrition_each_container">
                    <div><Countup end={data.main.calories.amount} duration={5}/></div>
                    <p>Calories</p>
                    <p>{data.main.calories.unit}</p>
                </div>
                <div className="Nutrition_each_container">
                <div><Countup end={data.main.fat.amount} duration={5}/></div>
                    <p>Fat</p>
                    <p>{data.main.fat.unit}</p>
                </div>
                <div className="Nutrition_each_container">
                <div><Countup end={data.main.carbs.amount} duration={5}/></div>
                    <p>Carbs</p>
                    <p>{data.main.carbs.unit}</p>
                </div>
                <div className="Nutrition_each_container">
                <div><Countup end={data.main.protein.amount} duration={5}/></div>
                    <p>Protein</p>
                    <p>{data.main.protein.unit}</p>
                </div>
            </div>

        </section>
    )
}
