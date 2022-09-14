import React from "react";
import { Link } from "react-router-dom";

function NavBar() {


    return (
        <div id="navbar">
            <div id='bannerDCL'>
            <Link className="route-link" to="/home"> DCL </Link>
            </div>
            <div id="banner">
                <Link className="route-link" to="/lineup">Lineup</Link>
                <Link className="route-link" to="/schedule">Schedule</Link>
                <Link className="route-link" to="/tickets">Tickets</Link>
                <Link className="route-link" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;