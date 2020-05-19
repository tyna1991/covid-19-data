import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {countriesAction} from './../../actions/allCountries.actions'
import { connect } from 'react-redux';

class Map extends React.Component{
    constructor(){
        super()
        this.state = {
            selectedCountry:'',
        }
        this.changeHandler = this.changeHandler.bind(this)
    }
    componentDidMount(){
        this.props.getCountries();
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
                        <option value="" disabled selected>wybierz państwo</option>
                        {this.props.countries.map((element)=>(
                            <option key={element.ISO2} value={element.Slug}>{element.Country}</option>
                        ))}
                    </select>
                    <span className="search-button">
                    <FontAwesomeIcon icon={faSearch} color="#d40000"/>
                    </span>
                </div>
            </div>
        </div>
    }
}

function mapState(state) {
    const { getCountries } = state;
    const { loading, countries} = getCountries;
    return { loading, countries};
}

const actionCreators = {
    getCountries:countriesAction.allCountries,
}

export default connect(mapState, actionCreators)(Map);