import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import preloader from './../../assets/preloader.svg'


class Statistics extends React.Component{
    constructor(){
        super()
        this.state={
            selectedCountryTotal : ''
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.name!==this.props.name){
            if(!this.props.name){
                this.setState({
                    selectedCountryTotal : ''
                })
            }else{
                const selectedCountryTotal = this.props.countries.filter(country=>{
                    return country.Country === this.props.name
                })
                this.setState({
                        selectedCountryTotal: selectedCountryTotal.length ? selectedCountryTotal[0] : {
                        Country:this.props.name,
                        TotalConfirmed: '-',
                        TotalDeaths:'-',
                        TotalRecovered:'-'
                    }
                })
            }  
        }
    }

    render(){
    return <div className="statistics">
        {this.props.loading && <div className='preloader'><img className='preloader-img' src={preloader} alt="preloader"/></div> }
        <h4>Statistics</h4>
        <div className="table-container">
            <div className="bg">
                <h2 className="country-name"> <FontAwesomeIcon icon={faMapMarker} color="#D40000"/><span>{this.state.selectedCountryTotal ? this.state.selectedCountryTotal.Country : 'GLOBAL'}</span></h2>
                <div className="flex-table-container">
                    <div className="col">
                        <div className="row heading"><span>confirmed</span></div>
                        <div className="amount row">{this.state.selectedCountryTotal ? this.state.selectedCountryTotal.TotalConfirmed : (this.props.global && this.props.global.TotalConfirmed)}</div>
                    </div>
                    <div className="col">
                        <div className="row heading"><span>deaths</span></div>
                        <div className="amount row">{this.state.selectedCountryTotal ? this.state.selectedCountryTotal.TotalDeaths : (this.props.global && this.props.global.TotalDeaths)}</div>
                    </div>
                    <div className="col">
                        <div className="row heading"><span>recoveries</span></div>
                        <div className="amount row">{this.state.selectedCountryTotal ? this.state.selectedCountryTotal.TotalRecovered : (this.props.global && this.props.global.TotalRecovered)}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
}

function mapState(state) {
    const { getSummary, getStatus } = state;
    const {  countries, global, loading} = getSummary;
    const { status, name} = getStatus;
    return { loading, countries, global, status, name};
}

const actionCreators = {}

export default connect(mapState, actionCreators)(Statistics);