import React, { useEffect } from "react";
import { useIterator } from "./CustomHooks";
// import RepositoryReadme from "./RepositoryReadme";

export function RepoMenu({
    repositories,
    // login,
    selected,
    onSelect = f => f
}) {
    const [{ name }, previous, next] = useIterator(
        repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : null
    );

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            {/* <RepositoryReadme login={login} repo={name} /> */}
        </>
    );

}

