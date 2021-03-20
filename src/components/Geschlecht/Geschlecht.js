import React from 'react';
import './Geschlecht.css';
import ButtonBis from '../ButtonBis/ButtonBis';
import { Link } from 'react-router-dom';


function Geschlechtt() {
    return (
        <div className='geschlecht-container'>
           <h1 className='question'>Wähle dein Geschlecht</h1>
            <div className='geschlecht-pics'>
                <img src="/images/frau.jpg" alt="Lady avatar" />
                <figcaption className="figcaption">Weiblich</figcaption>
                <img src="/images/mann.jpg" alt="Man avatar" />
                <figcaption className="figcaption">Männlich</figcaption>
            </div>
            <Link to='/gesichtsform'>
               <ButtonBis />
            </Link>
        </div>
    )
}

export default Geschlechtt
