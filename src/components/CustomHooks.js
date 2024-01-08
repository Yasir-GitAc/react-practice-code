import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from "react";
import colorData from "../data/color-data.json";
import { v4 } from "uuid";


// useIterator custom hook p177-178,ch8
export const useIterator = (
    items = [],
    initialIndex = 0
) => {
    const [i, setIndex] = useState(initialIndex);

    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length - 1)
        setIndex(i - 1)
        console.log(i)
    }, [i]);

    const next = useCallback(() => {
        if (i === items.length - 1) return setIndex(0)
        setIndex(i + 1)
    }, [i])

    const item = useMemo(() => items[i], [i])

    return [item || items[0], prev, next]

}



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
