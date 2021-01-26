import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
        <div className="header">
            <div></div>
            <ul className="nav-links">
                <li >
                    <Link to="/" className="link">Watch-List</Link> 
                </li>
                <li>
                    <Link to="/Watched" className="link">Watched</Link>
                </li>
                <li>
                    <Link to="/add" className="link"> +Add</Link>
                </li>
            </ul>
        </div>
        </>
    )
}
