import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
        <div className="header">
            <div>
                <Link to="/">Watch List</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Watch List</Link> 
                </li>
                <li>
                    <Link to="/TopRated">Top Rated</Link>
                </li>
                <li>
                    <Link to="/Upcoming">Up Coming</Link>
                </li>
                <li>
                    <Link to="/Latest">Latest</Link>
                </li>
                <li>
                    <Link to="/Watched">Watched</Link>
                </li>
            </ul>
        </div>
        </>
    )
}
