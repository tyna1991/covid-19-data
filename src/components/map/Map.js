import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {countriesAction} from './../../actions/allCountries.actions'
import {statusByCountry} from './../../actions/statusByCountry.actions'
import {statusCountries} from './../../actions/statusCountries.actions'
import { connect } from 'react-redux';
import countriesGeoLocation from './countries.json'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import preloader from './../../assets/preloader.svg'

var customMarker = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#d40000d1; height:10px; width:10px; border-radius:50%' class='marker-pin'></div>",
    iconSize: [30, 42],
    popupAnchor: [-10, -25]
});
var defaultPosition = [15.454166, 18.732207]
var defaultZoom = 2
class MapWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            selectedCountrySlug:'',
            selectedCountryName:'',
            selectedCountryISO2:'',
            countries:[],
            position:defaultPosition,
            zoom:defaultZoom,
            countriesSelect:[],
            clickEvent:false,
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submit = this.submit.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.handlePopupClose = this.handlePopupClose.bind(this)
        this.changePositionAndZoom = this.changePositionAndZoom.bind(this)
    }
    componentDidMount(){
        this.props.summary();
    }
    componentDidUpdate(prevProps){
        if(prevProps.getSummary.countries !== this.props.getSummary.countries && this.props.getSummary.countries.length){
            this.props.getAllCountries();
            const countries = this.props.getSummary.countries.map(country=>{
                const index = countriesGeoLocation.findIndex(countryGeo =>{
                    return countryGeo.country === country.CountryCode
                })
                return {...country, lat: countriesGeoLocation[index].latitude, lng:countriesGeoLocation[index].longitude }
            })
            this.setState({
                countries
            })
        }
        if(prevProps.getCountries.countries !== this.props.getCountries.countries){
            const countriesSelect = this.props.getCountries.countries.sort((a,b)=>{
                if(a.Country < b.Country) { return -1; }
                if(a.Country > b.Country) { return 1; }
                return 0;
            })
            this.setState({
                countriesSelect
            })
        }
    }
    changeHandler(e){
    const {value} = e.target;
    var dataset = e.target.options[e.target.selectedIndex].dataset; 
    this.setState({
        selectedCountrySlug:dataset.slug,
        selectedCountryName:value,
        selectedCountryISO2:dataset.iso2,
        clickEvent:false
    })
    }
    clickHandler(e){
        var options = e.target.options; 
        this.setState({
            selectedCountrySlug:options.slug,
            selectedCountryName:options.name,
            selectedCountryISO2:options.iso2,
            clickEvent:true
        }, ()=>{this.submit()})
    }
    submit(){
        if(!this.state.selectedCountrySlug) return;
        if(!this.props.period || (!this.props.period!==undefined && !this.props.period.dateFrom)){
            this.props.byCountryAllStatus(this.state.selectedCountrySlug, this.state.selectedCountryName)
        }else{
            this.props.byCountryAndStatusAfterDate(this.state.selectedCountrySlug, this.props.period.dateFrom, this.state.selectedCountryName)
        }
        
        if(!this.state.clickEvent){
            this.changePositionAndZoom()
        }
    }
    changePositionAndZoom(){
        const selectedCountry = countriesGeoLocation.filter(countryGeo =>{
            return countryGeo.country === this.state.selectedCountryISO2
        })
        const position = selectedCountry.length ? [selectedCountry[0].latitude, selectedCountry[0].longitude] : [];
        this.setState({
            position: position.length ? position : defaultPosition,
            zoom: 5
        })
    }
    handlePopupClose(){
        this.setState({
           selectedCountryName:'',
           selectedCountryISO2:'',
           selectedCountrySlug:'' ,
        }, ()=>{
            this.props.resetStatus()
        })
    }
    render(){
    return <div className="map">
        {(this.props.getSummary.loading || this.props.getCountries.loading) && <div className='preloader'><img className='preloader-img' src={preloader} alt="preloader"/></div> }
            <Map center={this.state.position} zoom={this.state.zoom} onPopupClose={this.handlePopupClose}>
            <div className="country-change">
                <div className="select-wrapper">
                    <select value={this.state.selectedCountryName} onChange={this.changeHandler} name="selectedCountryName">
                        <option value="">wybierz państwo</option>
                        {this.state.countriesSelect.map((element)=>(
                            <option key={element.ISO2} value={element.Country} data-slug={element.Slug} data-iso2={element.ISO2}>{element.Country}</option>
                        ))}
                    </select>
                    <span className="search-button" onClick={this.submit}>
                    <FontAwesomeIcon icon={faSearch} color="#d40000"/>
                    </span>
                </div>
            </div>
                <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                {this.state.countries.map(({ lat, lng, Country, TotalConfirmed, TotalDeaths, TotalRecovered, CountryCode, Slug}, index) => (
                <Marker position={[lat, lng]} icon={customMarker} key={index} onClick={this.clickHandler} name={Country} iso2={CountryCode} slug={Slug}>
                    <Popup>
                        <h5>{Country}</h5>
                        <p>confirmed: <b>{TotalConfirmed}</b></p>
                        <p>deaths: <b>{TotalDeaths}</b></p>
                        <p>recoveries: <b>{TotalRecovered}</b></p>
                    </Popup>
                </Marker>
                ))}
            </Map>                
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
    resetStatus:statusByCountry.resetStatus,
    summary:statusCountries.summary,
}

export default connect(mapState, actionCreators)(MapWrapper);