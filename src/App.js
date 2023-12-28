import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList.js";


export default function App(){
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating)=> {
        const newColors = colors.map(color=> color.id === id ? {...color, rating } : color);
        setColors(newColors)
      }}
      onRemoveColor={id=>{
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  )
}










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
