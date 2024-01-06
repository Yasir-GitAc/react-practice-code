import React, { createContext, useState, useEffect, useContext } from "react";
import colorData from "../data/color-data.json";
import { v4 } from "uuid";



// useFetch hook p172, ch8
// check fetch component
// export function useFetch(uri) {
//     const [data, setData] = useState();
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!uri) return;
//         fetch(uri)
//             .then(data => data.json())
//             .then(setData)
//             .then(() => setLoading(false))
//             .catch(setError);
//     }, [uri]);

//     return {
//         loading,
//         data,
//         error
//     };
// }




// const ColorContext = createContext({
//     colors: [], // Default values
//     addColor: () => {},
//     removeColor: () => {},
//     rateColor: () => {}
// });

// const ColorContext = createContext();

// export  const useColors = () => useContext(ColorContext);


export const useInput = InitialValue => {
    const [value, setValue] = useState(InitialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(InitialValue)
    ]
}
