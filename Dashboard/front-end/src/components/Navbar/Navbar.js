import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div class="NAVBAR">
            <Link to="/dashboard">
                <button class="Dashboard" type="button">
                    <img class="imgNavbarLeft" src="tiles.png" alt="Tiles" width="40" />
                Dashboard
                <img class="imgNavbarRight" src="tiles.png" alt="Tiles" width="40" />
                </button>
            </Link>
            <Link to="/services">
                <button class="Services" type="button">
                    <img class="imgNavbarLeft" src="tiles.png" alt="Tiles" width="40" />
                Services
                <img class="imgNavbarRight" src="tiles.png" alt="Tiles" width="40" />
                </button>
            </Link>
        </div>
    )
}