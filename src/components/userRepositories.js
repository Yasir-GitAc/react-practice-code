import React from "react";
import Fetch from "./fetch_component";
import { RepoMenu } from "./RepoMenu";


export default function UserRepositories({
    login,
    repo,
    onSelect = f => f
}) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    selected={repo}
                    login={login}
                    onSelect={onSelect}
                />
            )}
        />
    );
}
