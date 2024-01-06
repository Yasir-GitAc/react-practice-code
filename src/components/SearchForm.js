import React, { useRef } from "react";

export default function SearchForm({ value, onSearch }) {
    const userName = useRef()

    const submit = e => {
        e.preventDefault();
        const uName = userName.current.value;
        onSearch(uName)
        userName.current.value = ""
    }

    return (
        <form onSubmit={submit} >
            <input
                ref={userName}
                type="text"
                placeholder="Search User..."
                required
            />
            <button>Search</button>
        </form>
    )
}
