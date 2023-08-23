import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foodArr, setFoodArr] = useState(foodsJson);

  return (
    <div className="App">

      <h1>LAB | React IronNutrition</h1>
       <AddFoodForm foodArr= {foodArr} setFoodArr = {setFoodArr} />
      
      {foodArr.map((eachElement) => {
        return (
          <FoodBox
          foodArr= {foodArr} setFoodArr = {setFoodArr}
          food={eachElement} 
          />
        );
      })}
    </div>
  );
}

export default App;
