import React, { createContext , useState, useContext } from "react";
import colorData from "../data/color-data.json";
import { v4 } from "uuid";


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
        { value, onChange: e => setValue(e.target.value)},
        ()=>setValue(InitialValue)
    ]
}
