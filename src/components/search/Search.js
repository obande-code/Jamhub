import React from 'react'
import './Search.scss'

const Search = () => {
    return (
        <div className="search-section">
            <form className="form">
                <label for="job">Job Description <br/>
                <input className="job" type="text" />
                </label><br/>
                <label for="location">Job Location<br/>
                <input className="location" type="text" />
                </label><br/>
                <label for="full-time"> <input className= "fullTime" type="Checkbox" />Full Time Only</label>
            </form>
        </div>
    )
}

export default Search
