import React from 'react';
import './../../App.css';
import Statistics from './Statistics';
import Timeline from './Timeline';

function Detalis(){
    return <div className="detalis" id="scrollbar-custom">
        <h1>Tracking Coronavirus COVID-19</h1>
        <p className="description">Coronavirus disease 2019 (COVID-19) is an <b>infectious disease</b> caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
        It was first identified in December 2019 in Wuhan, China, and has since spread globally, resulting in an <b>ongoing pandemic</b>.</p>
        <div className="country-detalis">
        <Statistics/>
        <Timeline/>
        </div>
    </div>
}

export default Detalis