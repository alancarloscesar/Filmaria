import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { toast } from "react-toastify";

export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    },[]);

    function hasDelete(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(
                item.id !== id
            )
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes',JSON.stringify(filtroFilmes))
        
       
        toast.success('Filme excluido com sucesso!')
    }

    return (
   <>
   <h1>Página de favoritos</h1>
   <div className="Container">
        {filmes.length === 0 && <span>Você não salvou nenhum filme :(.</span>}
        {filmes.map((item)=>{
            return(
                <section className="Container-section">
                    <div className="Content">
                        <strong id="st" key={item.id}>{item.nome}</strong>
                        <h5>{item.sinopse}</h5>
                        <div className="AreaBtnFav">
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=>{hasDelete(item.id)}}>Excluir</button>
                        </div>
                    </div>
                </section>
            )
        })}

   </div>
   </>
  );
}