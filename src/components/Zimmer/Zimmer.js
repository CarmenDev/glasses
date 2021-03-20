import React from 'react';
import './Zimmer.css';
import { Link } from 'react-router-dom';
import ButtonBis from '../ButtonBis/ButtonBis';


function Zimmer() {
    return (
        <div className='zimmer-container'>
        <h1 className='question'>Welche Zimmer gefallen dir?</h1>
        <div className='zimmer-pics'>
            <img src="/images/room_student.jpg" alt="Student room" />
            <img src="/images/room_urban.jpg" alt="Urban room" />
            <img src="/images/room_barock.jpg" alt="Barock room" />
            <img src="/images/room_gemuetlich.jpg" alt="Gemütliches Zimmer" />
            <img src="/images/room_kreativ.jpg" alt="Kreatives Zimmer" />
            <img src="/images/room_kinder.jpg" alt="Kinderzimmer" />
        </div>
        <Link to='/geschlecht'>
               <ButtonBis />
            </Link>
    </div>
       
    )
}

export default Zimmer
