import React from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <nav className="headers">
        <img src={`images/netflix-logo.png`} alt="netflix" />

        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recently-viewed">Recently</Link>
            <Link to="/mylist">My List</Link>

        </div>

        <ImSearch />


    </nav>
  )
}

export default Header