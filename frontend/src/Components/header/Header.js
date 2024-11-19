import { useEffect } from "react";
import "./Header.css";
import { Link, } from "react-router-dom";

const Header=()=>{
    useEffect(()=>{
        document.title="Aanand"
    },[])
    return<div className="Header">
        <div className="headerdiv1">
            <Link>Home</Link>
        </div>
        <div className="headerdiv2">

            <Link>logIn</Link>
            <Link>signIn</Link>


        </div>
    </div>
}
export default Header;