import React from "react"
import Minhaimg from '../../assets/404.png'
import './notfound.css'
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div className="AreaNot">
            <section>
                <h2>Página não encontrada</h2>
                <Link to='/' className="todos">Todos os filmes</Link>
            </section>
            <img className="imgNot" src={Minhaimg} alt="img"/>
        </div>
    )
}