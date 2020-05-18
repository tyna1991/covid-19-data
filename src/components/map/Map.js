import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Map extends React.Component{
    constructor(){
        super()
        this.state = {
            country:''
        }
    }
    render(){
    return <div className="map">
            <div className="country-change">
                <div className="select-wrapper">
                    <select name="">
                        <option>Państwo 1</option>
                        <option>Państwo 2</option>
                        <option>Państwo 3</option>
                    </select>
                    <span className="search-button">
                    <FontAwesomeIcon icon={faSearch} color="#d40000"/>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default Map