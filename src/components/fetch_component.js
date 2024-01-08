import React, { useState, useEffect } from "react";

function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri]);

    return {
        loading,
        data,
        error
    };
}


function Fetch({
    uri,
    renderSuccess,
    loadingFallBack = <p>loading...</p>,
    renderError = error => {
        <pre>{JSON.stringify(error, null, 2)}</pre>
    },

}) {
    const { loading, data, error } = useFetch(uri)
    console.log('data', data)
    if (loading) return loadingFallBack;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data })
}

export default Fetch;
