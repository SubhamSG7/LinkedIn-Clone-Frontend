import React from 'react'
import './LoginHeader.css'

export const LoginHeader = () => {
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
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                        </div>
                        <p>Forgot Password?</p>
                        <button type="button" class="btn btn-success">Sign In</button>
                    </div>
                    <div className='HeadingImage'>
                        image
                    </div>
                <div>

                </div>
            </div>
        </div>
    )
}
