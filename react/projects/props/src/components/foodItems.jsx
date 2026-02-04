import Item from "./item";

const FoodItems = () => {
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return(
    <>
    <ul className="list-group">
        {foodItems.map((item)=>{
            return <Item key = {item} Food = {item}></Item>
        })}
    </ul>
    </>
  );
}

export default FoodItems;
