import React from 'react';
import './Ergebnis.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Ergebnis() {
    return (
        <div className='ergebnis-container'>
            <div className='top-container'> 
               <div> 
                    <h2>Dein Ergebnis</h2>
               </div>
               <div>
                    <Button variant="contained" color="secondary">ERGEBNIS MAILEN</Button>
               </div>
            </div>
            <div className='ergebnis-photos'>
                <img src='/images/urban/keyvisual.jpg' alt='Glasses Urban look' />
                <div className='urbane-look'>
                    <h1> Zu dir passt der urbane Look!</h1>
                    <p>Stilvoll, modern und angesagt: Du bist modisch auf dem neusten Stand und weißt was auf den Straßen der Metropolen dieser Welt getragen wird. Dein urbaner Stil ist lässig und funktional zugleich. Zu dir passen Brillenmodelle, die cool wirken, gleichzeitig aber bequem und leger sind.</p>
                </div>
                <img src='/images/brillen/italia_independent5710v_stn_071.jpg' alt='Italian glasses' id='charlie-glasses'/>
                <div>
                    <h1>Diese Brillen passen perfekt zu deinem Typ</h1>
                </div>
            </div>
            <h1></h1>
            
        </div>
    )
}

export default Ergebnis
