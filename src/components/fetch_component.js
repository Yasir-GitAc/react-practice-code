import React, { useState, useEffect } from "react";

function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [laoding, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri]);

    return {
        laoding,
        data,
        error
    };
}


function Fetch({
    uri,
    loadingFallBack = <loadingSpinner />,
    renderError = error => {
        //handle error
        return <p> Something went wrong...{error.message}</p>
    },
    renderSuccess = ({ data }) => {
        <>
            <h1>Todo: Render UI for data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    }

}) {
    const { loading, data, error } = useFetch(uri)
    console.log('err', error)
    console.log('data', data)
    if (loading) return loadingFallBack;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data })
}

export default Fetch;

