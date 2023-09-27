import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods,setFoods] = useState(foodsJson)
  const [updatedFood, setUpdatedFood] = useState(foods)
function foodDelete(foodId){
  console.log("calls")
  const deletedFood = updatedFood.filter((element) => element.id !== foodId)
  setUpdatedFood(deletedFood)
  // console.log("calls")
}
function addNewFood(newFood){
  const newArray = [...updatedFood]
  newArray.unshift(newFood)
  // setFoods(newList)
  setUpdatedFood(newArray)

}
  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood = {addNewFood}></AddFoodForm>
      {updatedFood.map((oneFood)=>{
       return(
        <FoodBox food={ oneFood  } deleteFood = {foodDelete} key = {oneFood.id} />
        
       ) 
      })}
    </div>

  );
}

export default App;
