import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Map extends React.Component{
    constructor(){
        super()
        this.state = {
            selectedCountry:'',
        }
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(e){
    const {value} = e.target;
    this.setState({
        selectedCountry:value
    })
    }
    render(){
    return <div className="map">
            <div className="country-change">
                <div className="select-wrapper">
                    <select onChange={this.changeHandler} name="selectedCountry">
                        <option value='1'>Państwo 1</option>
                        <option value='2'>Państwo 2</option>
                        <option value='3'>Państwo 3</option>
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