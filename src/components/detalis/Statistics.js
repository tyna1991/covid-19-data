import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

function Statistics(){
    return <div className="statistics">
        <h4>Statistics</h4>
        <div className="table-container">
            <div className="bg">
                <h2 className="country-name"> <FontAwesomeIcon icon={faMapMarker} color="#D40000"/><span>POLAND</span></h2>
                <div className="flex-table-container">
                    <div className="col">
                        <div className="row heading"><span>confirmed</span></div>
                        <div className="amount row">500</div>
                    </div>
                    <div className="col">
                        <div className="row heading"><span>deaths</span></div>
                        <div className="amount row">500</div>
                    </div>
                    <div className="col">
                        <div className="row heading"><span>recoveries</span></div>
                        <div className="amount row">500</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Statistics