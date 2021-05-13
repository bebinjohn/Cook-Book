//api for search all the dishes
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


//@params(search_name,type of food)
//returns the parsed data
export const search=async(dish,type)=>{
        const url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${dish}&&number=15&addRecipeNutrition=true&addrecepieinstruction=true&fillIngredients=true&type=${type}`
    
        try {
            const response=await fetch(url)
            const data=await response.json()
            const recipes=await parse(data)
            return recipes
        } catch (error) {
            return false
            
        }
       
}

//Snackbar Component
export  const Snack=({show,setshow})=>{
    return(
        <Snackbar open={show} autoHideDuration={6000} onClose={()=>setshow(false)}>
          <Alert onClose={()=>setshow(false)} severity="error">Couldn't find the result!!</Alert>
      </Snackbar>
    )
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  //@params(data)
  //parses the main data
const generatemain=(res)=>{
    return{
        img:res.image,
        title:res.title,
        summary:res.summary,
        ingredients:res.extendedIngredients,
        calories:{
            amount:res.nutrition.nutrients[0].amount,
            unit:res.nutrition.nutrients[0].unit
        },
        fat:{
            amount:res.nutrition.nutrients[1].amount,
            unit:res.nutrition.nutrients[1].unit
        },
        carbs:{
            amount:res.nutrition.nutrients[3].amount,
            unit:res.nutrition.nutrients[3].unit
        },
        protein:{
            amount:res.nutrition.nutrients[8].amount,
            unit:res.nutrition.nutrients[8].unit
        }
    }
}

//Parse function to parse the data from api
const parse=async(response)=>{
    const data=response.results
    const main=generatemain(data[0])
    const more_recipies=response.results.slice(1,response.results.length)
    const recipe=await getrecipe(data[0].id)
    return{
        main,
        more_recipies,
         summary:recipe
    }
}


//Parse all the related dishes from api
export const parserelated=async(response,id,each)=>{
        const otherrecipes=response.more_recipies.filter((each)=>{
            return each.id!==id
        })
       const main=generatemain(each)
       const recipe=await getrecipe(id)
       return{
        main,
        more_recipies:otherrecipes,
         summary:recipe
    }

}


//@params(recipe_id)
//returns the recipe_instructions
 const getrecipe=async(id)=>{
        const response=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await response.json()
        return data.instructions
        
}