export default function FoodBox(props) {
  console.log(props);

  const { id, name, calories, image, servings } = props.food;


  const handleDelete = () => {
    console.log("intentando deletear", props.foodArr);

    let clone = JSON.parse(JSON.stringify(props.foodArr));

    let filteredArr =  clone.filter((element) => {

      if (id === element.id) {
        return false;
      } else {
        return true;
      }
    });
console.log(filteredArr)
    props.setFoodArr(filteredArr);
  };

  return (
    <div key={id}>
      <p>{name}</p>

      <img src={image} width="150px" />

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
