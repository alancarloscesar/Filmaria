import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";
import './styles.css'
import { toast } from "react-toastify";

export default function Filme(){

    const {id} = useParams();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                //se o id for incorreto, navega o user para a home com o use history
                navigate('/')//pagina home
                return;
            }

            setFilmes(response.data);
            setLoading(false);
        }

        loadFilmes();
    
    },[navigate,id])

    //salvando o localStorage
    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => 
            filmeSalvo.id === filmes.id)
        
        if(hasFilme){
            toast.info('Esse filme já foi cadastrado!!!')
            return;
        }

        filmesSalvos.push(filmes);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme adicionado aos favoritos!!')
    }


    return(
        <div className="Container">
            <h1>{loading ? 'Carregando Filme' : filmes.nome}</h1>

            <div className="Context">

                <img src={filmes.foto} alt='carregando img...'/>

                <div className="AreaSinopse">
                    <span className="Sinopse">Sinopse: </span>
                    <span className="SinopseContext">{filmes.sinopse}</span>

                <div className="AreaBtn">
                    <button onClick={salvaFilme}>Salvar</button>
                    <a target='_blank' href={`https://www.youtube.com/results?search_query=${filmes.nome} Trailer`}>Trailer</a>
                </div>

                </div>

            </div>

        </div>
    )
}