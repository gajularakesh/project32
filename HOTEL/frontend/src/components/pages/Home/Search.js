import React from 'react'
import './Search.css'
export function Search() {
    return (
        <div className="form-search">
            <form className="search">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}
