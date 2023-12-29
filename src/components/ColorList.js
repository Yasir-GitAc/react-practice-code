import React from "react";
// import Color from "./Color";
// import { ColorContext } from "..";
import StarRating from "./Ratings";
import {FaTrash} from "react-icons/fa";
import { useColors } from "./ColorProvider.js";

console.log("useColors", useColors)

function Color({ id, title, color, rating, onRemove =f=>f, onRate =f=>f }){
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={()=> removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate= {rating=> rateColor(id, rating)}
            />
        </section>
    );
}


export default function ColorList(){
    const { colors } = useColors();

    if(!colors.length) return (<div>No Color Listed. (Add a Color)</div>);
    return (
        <div className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    )
}

// export default function ColorList({ colors=[], onRemoveColor=f=>f, onRateColor=f=>f }){

//     if(!colors.length) return (
//         <div>No Color Listed.</div>

//     )

//     return(
//         <div>
//             {
//                 colors.map(color=> <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>)
//             }
//         </div>
//     )
// }
