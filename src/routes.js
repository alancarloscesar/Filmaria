import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Header from "./components/Header";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";

const RoutesUrl = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route caseSensitive path="/" element={<Home/>} />
                <Route  path="/filme/:id" element={<Filme/>} />
                <Route path="/favoritos" element={<Favoritos/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesUrl;