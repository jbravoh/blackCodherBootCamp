import React, { useEffect, useState } from "react"; // add useState to make .state availanle
import Button from "./button";

function Product (props) {
    const [count, setCount] = useState(0); // function update the value

    useEffect(() => {
        document.title = `${count} items in basket`;
    }, [count]); // if count changes it will update the document

    return (
        <div className = "App"> 
            <h2>{props.name}</h2>
            <p> {props.author}</p>
            <p> {props.price}</p>
            <p>{props.description}</p>
            <p>
                <img src={props.image} alt={props.alt}/>
            </p>
            <p> I have added {count} to the basket</p>
            <p>
                <button
                    onlick={() => setCount(count + 1)}
                >Add item</button>
            </p>
        </div>
    )
}

export default Product; // able to import it somewhere else
