// Your code here
import "./FoodBox.css"
function FoodBox({food , deleteFood}){
// console.log(props)
    return(
        <div className = {food.id}>
        <p>{food.name}</p>

        <img src={food.image} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>

        <button onClick={()=>deleteFood(food.id)}>Delete</button>
        </div>
    )
};

export default FoodBox;