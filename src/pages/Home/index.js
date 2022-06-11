import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './styles.css'

export default function Home(){


    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes/');
            setFilmes(response.data);

            setLoading(false)
        }

        loadFilmes();

    },[])

    if(loading){
        return(
            <div className='Loading'>
                <h1>Carregando filmes...</h1>
            </div>
        )
    }

    return (
        <div className='Container'>
            {filmes.map((item) =>{
                return(
                    <article key={item.id} className='AreaFilme'>
                        <strong className='AreaFilmeText'>{item.nome}</strong>
                        <img src={item.foto} alt={item.nome} className='AreaFilmePicture'/>

                        <Link to={`/filme/${item.id}`}>Acessar</Link>
                    </article>
                )
            })}
        </div>
    )
}