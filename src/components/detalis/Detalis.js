import React from 'react';
import './../../App.css';
import Statistics from './Statistics';
import Timetable from './Timetable';

function Detalis(){
    return <div className="detalis" id="scrollbar-custom">
        <h1>Tracking Coronavirus COVID-19</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui non risus maximus posuere. 
           Duis semper eros vel nisi suscipit mattis. Proin sit amet hendrerit magna. Etiam eu iaculis neque. 
           Morbi dapibus porta dignissim. Integer ut fermentum leo, imperdiet varius felis. Etiam porttitor malesuada lectus vitae vestibulum. </p>
        <div className="country-detalis">
        <Statistics/>
        <Timetable/>
        </div>
    </div>
}

export default Detalis