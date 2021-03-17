import React from 'react';
import './Home.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-container'>
            <h1 className='question'>Welcher Brillentyp bist du?</h1>
            <h4>Wähle zu den folgenden Fragen das Jeweils für dich <br/> passende Bild aus und finde es heraus.</h4>
            <img src='/images/start-desktop.png' alt="desktop-image"/>
            <Link to='/urlaub'>
               <Button variant="contained" color="primary">JETZT HERAUSFINDEN</Button>
            </Link>
            
        </div>
    )
}

export default Home
