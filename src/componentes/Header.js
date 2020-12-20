import React from 'react'
import {Link} from 'react-router-dom'
import estilo from './estilos.css'


const Header =()=>{
    return(
        <header>
            <div className="nav">
                <Link to="/"><h3>Logo</h3></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="contato">Contato</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default  Header