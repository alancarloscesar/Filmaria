import React from "react";
import { Link } from "react-router-dom";
import './header.css'

export default function Header(){
    return(
        <header>
            <Link className="Films" to='/'>Filmaria</Link>
            <Link className="Save" to='/favoritos'>Favoritos</Link>
        </header>
    )
}