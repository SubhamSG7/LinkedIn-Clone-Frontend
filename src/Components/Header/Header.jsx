import React from "react";
import './Header.css';
import search from '../Images/Search.jpg'

const Header = () => {
    return (
        <>
            <div className="Header-Container">
                <div className="search-input">
                    <input type="text" placeholder="Search..." />
                    <img className="search-icon" src={search} alt="Search" />
                </div>
                <div className="HeaderBar1">
                    <button className="btn btn-info">Home</button>
                    <button className="btn btn-info">My Network</button>
                    <button className="btn btn-info">Jobs</button>
                    <button className="btn btn-info">Messaging</button>
                    <button className="btn btn-info">Notification</button>
                </div>
                <div className="HeaderBar2">
                    <button class="btn btn-success">For Bussiness</button>
                    <p className="fw-lighter">Try Now : Premium for ₹0</p>
                </div>
            </div>
        </>
    )
}
export default Header;