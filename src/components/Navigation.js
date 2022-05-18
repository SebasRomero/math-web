import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <div>
            <li className="nav-item">
                <Link to={props.path} className="nav-link active">{props.name}</Link>
            </li>
        </div>
    )
}

export default Navigation