import Styles from "./item.module.css"

function Item(props){
    return (
        <li className={`list-group-item ${Styles["food-style"]}`}>
            {props.Food}
        </li>
    );
};

export default Item;