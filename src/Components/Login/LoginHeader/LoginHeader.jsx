import React, { useState } from 'react'
import './LoginHeader.css'

export const LoginHeader = () => {
    const [userdata, setuserData] = useState({
        email: '',
        password: ''
    })
    return (
        <div>
            <div className='LoginHeaderContainer'>
                <div>
                    Image Div
                </div>
                <div className='LoginHeaderContainer2'>
                    <section>

                        <p>Article</p>
                    </section>
                    <section>
                        <p>People</p>
                    </section>
                    <section>
                        <p>Learning</p>
                    </section>
                    <section>
                        <p>Jobs</p>
                    </section>
                    <button type="button" className="btn btn-secondary" >Join Now</button>
                    <button type="button" className="btn btn-outline-primary" >Signin</button>
                </div>
            </div>
            <hr className="border border-primary border-3 opacity-75" />
            <div className='LoginInput'>
                <div className='LoginHeadingdiv'>
                    <h1 className='LoginHeadingtag'>Discover What's your</h1>
                    <h1 className='LoginHeadingtag'>Network can do for you.</h1>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="email" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => { setuserData({ ...userdata, email: e.target.value }) }} />
                    </div>
                    {userdata.email.length < 9 && userdata.email.length > 0 ? (<div className='WarningTag'>Please Provide a valid Email</div>) : (<p></p>)}
                    <div class="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={(e) => { setuserData({ ...userdata, password: e.target.value }) }} />
                    </div>
                    {userdata.password.length < 8 && userdata.password.length > 0 ? (<div className='WarningTag'>Please Provide a valid Password : Password Should be more than 9 digits having including a-z,0-9</div>) : (<p></p>)}
                    <p>Forgot Password?</p>
                    <button type="button" className="btn btn-success">Sign In</button>
                    <div class="line-with-text">
                        <hr />
                        <span>or</span>
                    </div>
                    <div class="inline-links">
                        <p>
                            By clicking Continue, you agree to LinkedIn’s
                            <a href="#" id="user-agreement-link"> User Agreement</a>,
                            <a href="#" id="privacy-policy-link">Privacy Policy</a>, and
                            <a href="#" id="cookie-policy-link">Cookie Policy</a>.
                        </p>
                    </div>
                    <div class="dropdown-container">
                        <button class="dropdown-button">Email</button>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#" class="dropdown-item">Email</a></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <button class="new-button">New to Linkedin? Join Now</button>
                </div>
                <hr className="border border-primary border-2 opacity-50" />
                <div className='HeadingImage'>
                    image
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
