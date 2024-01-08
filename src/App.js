import React, { useState, useEffect, memo } from "react";
import GithubUser from "./components/fetch_req_gituser.js";
import SearchForm from "./components/SearchForm.js";
import UserRepositories from "./components/userRepositories.js";
import RepositoryReadme from "./components/RepositoryReadme.js";
// import { FixedSizeList } from "react-window";
// import faker from "faker";

// import ColorList from "./components/ColorList.js";
// import AddColorForm from "./components/ColorForm.js";



// import List from "./components/list_component";
// import { render } from "@testing-library/react";

// const biglist = [...Array(5000)].map(() => ({
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar()
// }));


export default function App() {
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("learning-react");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GithubUser login={login} />
      <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} />
    </>
  )
}




// export default function App() {

//   const renderRow = ({ index, style }) => (
//     <div style={{ ...style, ...{ display: "flex" } }}>
//       <img
//         src={biglist[index].avatar}
//         alt={biglist[index].name}
//         width={50}
//       />
//       <p>
//         {biglist[index].name} - {biglist[index].email}
//       </p>
//     </div>
//   )

//   return (
//     <FixedSizeList
//       height={window.innerHeight}
//       width={window.innerWidth - 20}
//       itemCount={biglist.length}
//       itemSize={50}
//     >
//       {renderRow}
//     </FixedSizeList>
//   )
// }





// const Cat = ({ name }) => {
//   console.log(`rendering ${name}`)
// }

// const PureCat = memo(Cat);

// export default function App() {
//   const [cats, setCats] = useState(["B", "j", "o"]);
//   return (
//     <>
//       {cats.map((name, i) =>
//         <PureCat key={i} name={name} />
//       )}
//       <button onClick={() => setCats([...cats, prompt('name a cat')])}>
//         Add a cat
//       </button>
//     </>

//   )
// }

// <>
//   <AddColorForm />
//   <ColorList />
// </>





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
