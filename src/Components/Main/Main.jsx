import React, { useState } from 'react'
import Header from '../Header/Header'
import './Main.css'
import nopic from '../Images/noprofile.png'

export const Main = () => {
    const [data, setData] = useState("");
    return (
        <div className='MainContainer'>
            <div className='MainHeader'>
                <Header />
            </div>
            <div className='MainBody'>
                <div className='MainBodySec1'>
                    <div className="card">
                        <img src={nopic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><p className="fw-bolder">Welcome,</p></h5>
                            <p className="card-text">Name.......!</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Connection
                                <p className='fw-lighter'>Grow Your Connections</p></li>
                            <li className="list-group-item"><p className='fw-lighter'>
                                Grow Your Carrer with Premium</p>
                                <p className='fw-bolder'>try for Rs0</p>
                            </li>
                            <li className='list-group-item'><p className='fw-bolder'>My Item</p></li>
                        </ul>
                        <div className="card-body">
                            <div className="card-body">
                                <h5 className="card-title"><p className="fw-bolder"></p></h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='MainBodySec2'>
                    Posts
                </div>
                <div className='MainBodySec2'>
                    side Nav
                </div>
            </div>
        </div>
    )
}
