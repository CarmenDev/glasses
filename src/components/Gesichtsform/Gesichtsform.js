import React from 'react';
import './Gesichtsform.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Gesichtsform() {
    return (
        <div className='gesicht-container'>
           <h1 className='question'>Welche Gesichtsform hast du?</h1>
            <div className='gesicht-pics'>
                <img src="/images/normales-gesicht.jpg" alt="Normales Gesicht" />
                <figcaption className="figcaption">Normales Gesicht</figcaption>
                <img src="/images/schmales-gesicht.jpg" alt="Schmales Gesicht" />
                <figcaption className="figcaption">Schmales Gesicht</figcaption>
            </div>
            <Link to='/ergebnis'>
               <Button variant="contained" color="primary">WEITER</Button>
            </Link>
        </div>
    )
}

export default Gesichtsform

