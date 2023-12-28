import React from "react";
import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

function Recipe({ name, ingredients, steps }){
    const safeName = name || "Default Recipe Name";
    return(
        <section id={safeName.toLowerCase().replace(/ /g,"-" )} >
            <h1>{safeName}</h1>
            <IngredientList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    );
}

// toLowerCase()

export default Recipe;