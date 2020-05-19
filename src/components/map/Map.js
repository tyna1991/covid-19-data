import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEthernet } from '@fortawesome/free-solid-svg-icons'
import {countriesAction} from './../../actions/allCountries.actions'
import {statusByCountry} from './../../actions/statusByCountry.actions'
import {statusCountries} from './../../actions/statusCountries.actions'
import { connect } from 'react-redux';

class Map extends React.Component{
    constructor(){
        super()
        this.state = {
            selectedCountrySlug:'',
            selectedCountryName:'',
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submit = this.submit.bind(this)
    }
    componentDidMount(){
        this.props.summary()
    }
    componentDidUpdate(prevProps){
        if(prevProps.getSummary.countries !== this.props.getSummary.countries && this.props.getSummary.countries.length){
            this.props.getAllCountries();
        }
    }
    changeHandler(e){
    const {value} = e.target;
    var dataset = e.target.options[e.target.selectedIndex].dataset; 
    this.setState({
        selectedCountrySlug:value,
        selectedCountryName:dataset.name,
    })
    }
    submit(){
        if(!this.state.selectedCountrySlug) return;
        if(!this.props.period || (!this.props.period!==undefined && !this.props.period.dateFrom)){
            this.props.byCountryAllStatus(this.state.selectedCountrySlug, this.state.selectedCountryName)
        }else{
            this.props.byCountryAndStatusAfterDate(this.state.selectedCountrySlug, this.props.period.dateFrom, this.state.selectedCountryName)
        }
    }
    render(){
    return <div className="map">
            <div className="country-change">
                <div className="select-wrapper">
                    <select onChange={this.changeHandler} name="selectedCountry">
                        <option value="" disabled selected>wybierz państwo</option>
                        {this.props.getCountries.countries.map((element)=>(
                            <option key={element.ISO2} value={element.Slug} data-name={element.Country}>{element.Country}</option>
                        ))}
                    </select>
                    <span className="search-button" onClick={this.submit}>
                    <FontAwesomeIcon icon={faSearch} color="#d40000"/>
                    </span>
                </div>
            </div>
        </div>
    }
}

function mapState(state) {
    const { getCountries, getSummary, getStatus } = state;
    const {period} = getStatus;
    return { getCountries, getSummary, period};
}

const actionCreators = {
    getAllCountries:countriesAction.allCountries,
    byCountryAllStatus:statusByCountry.byCountryAllStatus,
    byCountryAndStatusAfterDate:statusByCountry.byCountryAndStatusAfterDate,
    summary:statusCountries.summary,
}

export default connect(mapState, actionCreators)(Map);