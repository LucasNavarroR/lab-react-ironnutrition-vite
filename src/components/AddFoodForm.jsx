import { useState } from "react";

export default function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleimgChange = (event) => {
    setImgInput(event.target.value);
  };

  const handlecaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handleservingsChange = (event) => {
    setServingsInput(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();

   

    props.setFoodArr([
      {
        name: nameInput,
        image: imgInput,
        calories: caloriesInput,
        servings: servingsInput,
      },
      ...props.foodArr,
    ]);
  };

  return (
    <div>
      <form>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={nameInput}
        />
        <br />
        <label htmlFor="image">image:</label>
        <input
          type="text"
          name="image"
          onChange={handleimgChange}
          value={imgInput}
        />
        <br />
        <label htmlFor="calories">calories:</label>
        <input
          type="number"
          name="calories"
          onChange={handlecaloriesChange}
          value={caloriesInput}
        />
        <br />
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          name="servings"
          onChange={handleservingsChange}
          value={servingsInput}
        />
        <br />
        <button onClick={handleButton}>Create</button>
      </form>
    </div>
  );
}
