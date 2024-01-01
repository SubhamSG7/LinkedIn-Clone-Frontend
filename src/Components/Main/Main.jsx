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
                        <img src={nopic} className="card-img-top" alt="..." id='imageNopic' />
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
                    <div className="card">
                        <img src={nopic} className="card-img-top" id='imageNopic' alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h2 className="card-text">Hi ....... are you hiring?</h2>
                            <p>Discover free and easy way to great hire, fast</p>
                            <div className='flexdivsec'>
                                <button className="btn btn-outline-primary">Yes,I'am hiring</button>
                                <button className="btn btn-outline-primary">No,not right now</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text" id="inputGroup-sizing-lg">Post</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                        </div>
                    </div>
                </div>
                <div className='MainBodySec2'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">LinkedIn News</h5>
                            <ul>
                                <li>15 Big Ideas that will shape 2024</li>
                                <p>dummy data</p>
                                <li>News</li>
                                <p>dummy data</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
