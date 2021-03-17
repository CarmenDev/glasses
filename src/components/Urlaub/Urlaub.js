import React from 'react';
import './Urlaub.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Urlaub() {
    return (
        <div className='urlaub-container'>
            <h1 className='question'>Wie würdest du gerne deinen Urlaub verbringen?</h1>
            <div className='holiday-pics'>
                <img src="/images/aktivurlaub.jpg" alt="Aktivurlaub" />
                <img src="/images/luxusurlaub.jpg" alt="Luxusurlaub" />
                <img src="/images/entspannungsurlaub.jpg" alt="Entspannungsurlaub" />
                <img src="/images/segelurlaub.jpg" alt="Segelurlaub" />
                <img src="/images/staedtetrip.jpg" alt="Städtetrip" />
                <img src="/images/abenteuerurlaub.jpg" alt="Abenteuerurlaub" />
            </div>
            <Link to='/zimmer'>
               <Button variant="contained" color="primary">WEITER</Button>
            </Link>
        </div>
    )
}

export default Urlaub
