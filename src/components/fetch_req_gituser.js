import React, { useState, useEffect } from "react";
import Fetch from "./fetch_component";

// // requesting data
// fetch(`https://api.github.com/users/moonhighway`)
//     .then(response => response.json())
//     .then(console.log)
//     .catch(console.error)


// // requesting data using async/await
// async function requestGithubUser(githubLogin) {
//     try {
//         const response = await fetch(
//             `https://api.github.com/users/${githubLogin}`
//         );
//         const userData = await response.json()
//         console.log(userData)
//     } catch (error) {
//         console.log(error)
//     }
// }


// // sendting data with a request
// fetch("create/user", {
//     method: "POST",
//     body: JSON.stringify({ username, password, id })
// })


// // uploading files. multipart-formdata
// const formData = new FormData();
// formData.append("username", "abcd");
// formData.append("password", "pass");
// formData.append("avatar", imgfile);

// fetch("create/user", {
//     method: "POST",
//     body: formData
// });

// // authorized request p158
// fetch(`https://api.github.com/users/${login}`, {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// });

// fetching data with react component using useState, useEffect hooks.

// function GitHubUser({ login }) {
//     const [data, setData] = useState(loadJSON(`user:${login}`));

//     useEffect(() => {
//         if (!data) return;
//         if (data.login === login) return;
//         const { name, avatar_url, location } = data;
//         saveJSON(`user:${login}`, {
//             name,
//             login,
//             avatar_url,
//             location
//         });
//         fetch(`https://api.gtihub.com/users/${login}`)
//             .then(response => response.json())
//             .then(setData)
//             .catch(console.error)
//     }, [data])

//     if (data)
//         return <pre>{JSON.stringify(data, null, 2)}</pre>

//     return null;
// }
// **** look below for final code


// laoding and saving data locally
// sessionStorage expires when session ends, localStorage better

const loadJSON = key =>
    key && JSON.parse(localStorage.getItem(key));


const saveJSON = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));


// // final githubuser

// function GitHubUser({ login }) {
//     const [data, setData] = useState(
//         loadJSON(`user:${login}`)
//     );

//     useEffect(() => {
//         if (!data) return;
//         if (data.login === login) return;
//         const { name, avatar_url, location } = data;
//         saveJSON(`user:${login}`, {
//             name,
//             login,
//             avatar_url,
//             location
//         });
//     }, [data])


//     useEffect(() => {
//         if (!login) return;
//         if (data && data.login === login) return;
//         fetch(`https://api.github.com/users/${login}`)
//             .then(response => response.json())
//             .then(setData)
//             .catch(console.error)
//     }, [login]);


//     if (data)
//         return <pre>{JSON.stringify(data, null, 2)}</pre>

//     return null
// }

// githubuser using useFetch
// export default function GitHubUser({ login }) {
//     const { loading, data, error } = useFetch(
//         `https://api.github.com/users/${login}`
//     );
//     if (loading) return <h1>loading...</h1>
//     if (error)
//         return <pre>{JSON.stringify(error, null, 2)}</pre>

// return (
//     <div className="githubuser">
//         <img
//             src={data.avatar_url}
//             alt={data.name}
//             style={{ width: 50 }}
//         />
//         <div>
//             <h1>{data.login}</h1>
//             {data.name && <p>{data.name}</p>}
//             {data.location && <p>{data.location}</p>}
//         </div>

//     </div>
// );
// }


// gtihubuser using Fetch Component

export default function GitHubUser({ login }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDatails}
        />
    );
}


function UserDatails({ data }) {
    return (
        <div className="githubuser">
            <img
                src={data.avatar_url}
                alt={data.name}
                style={{ width: 50 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>

        </div>
    );
}