import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigation=useNavigate();
    return (
        <>
        <h1>Header</h1>
        <button onClick={()=>{navigation('/Main')}}> hello</button>
        </>
    )
}
export default Header;