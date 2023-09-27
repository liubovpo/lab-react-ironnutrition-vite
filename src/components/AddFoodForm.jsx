import { useState } from "react";
import {v4 as uuid} from "uuid";
function AddFoodForm(props){
    const[name,setName] = useState("")
    const[image,setImage] = useState("")
    const[calories,setCalories] = useState(0)
    const[servings,setServings] = useState(0)

    const handleNameChange = element => setName(element.target.value)
    const handleImageChange = element => setImage(element.target.value)
    const handleCalorieseChange = element => setCalories(element.target.value)
    const handleServingsChange = element => setServings(element.target.value)
    
    const handleSubmit = (element) => {
        const id = uuid()
        element.preventDefault()
        const newFood = {name, image, calories, servings, id}
        console.log(newFood)
        props.addFood(newFood)
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }
    return(
        <div>

            <form onSubmit = {handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name = "name" value = {name} onChange={handleNameChange}/>
            <label htmlFor="">Image</label>
            <input type="text" name = "image" value = {image} onChange={handleImageChange}/>
            <label htmlFor="">Calories</label>
            <input type="number" name = "calories" value = {calories} onChange={handleCalorieseChange}/>
            <label htmlFor="">Servings</label>
            <input type="number" name = "servings" value = {servings} onChange={handleServingsChange}/>
            <button type="submit" >
                create new food
            </button>

            </form>
        
        </div>
    )
}
export default AddFoodForm;