import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {statusByCountry} from './../../actions/statusByCountry.actions';
import Chart from './Chart';
import preloader from './../../assets/preloader.svg'


class Timeline extends React.Component{
    constructor(){
        super()
        this.state={
            index:0,
            periods:[{
                name:'all time',
                dateFrom:''
            },
            {
                name:'1 week',
                dateFrom:new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T00:00:00Z'
            },
            {
                name:'2 weeks',
                dateFrom:new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]+ 'T00:00:00Z'
            },
            {
                name:'30 days',
                dateFrom:new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]+ 'T00:00:00Z'
            }],
            displayOptions:false,
        }
        this.listOfPeriods = React.createRef();
        this.displayOptions = this.displayOptions.bind(this)
        this.selectPeriod = this.selectPeriod.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    check = <FontAwesomeIcon icon={faCheck} color="#d5d5d5"/>
    componentDidUpdate(prevProps){
        if((prevProps.period.name!==this.props.period.name) && this.props.period.name){
            if(this.props.period.dateFrom){
                this.props.byCountryAndStatusAfterDate(this.props.slug, this.props.period.dateFrom, this.props.name)
            }else{
                this.props.byCountryAllStatus(this.props.slug, this.props.name)
            }
        }
    }
    displayOptions() {
        this.setState((prevState)=>{
            return{
                displayOptions:!prevState.displayOptions
            }
        })
    }
    selectPeriod(index){
        this.setState({
            ...this.state,
            index
        }, ()=>{this.displayOptions(); this.props.setPeriod(this.state.periods[index])})
    }
    componentWillMount() { document.addEventListener("click", this.handleClickOutside, false)};
    componentWillUnmount() { document.removeEventListener("click", this.handleClickOutside, false); }
    handleClickOutside(e) {
        if(!this.listOfPeriods.current.contains(e.target) && this.state.displayOptions) {
            this.displayOptions();
        }
    }
    render(){   
    return <div className="timeline">
        {this.props.loading && <div className='preloader'><img className='preloader-img' src={preloader} alt="preloader"/></div> }
                <h4>Timeline</h4>
                <div className={`period-chart ${(!this.props.name.length) && 'disabled'}`}>
                <div ref={this.listOfPeriods} className="period-change">
                    <div onClick={this.displayOptions} className='select'>
                        <span>{this.state.periods[this.state.index].name}</span>
                        <FontAwesomeIcon icon={faChevronDown} color="#d5d5d5"/>
                    </div>
                    <div className="options" style={{display:this.state.displayOptions ? 'block' : 'none'}}>
                       <ul>
                       {this.state.periods.map((period, index)=>(
                           <li data-from={period.dateFrom} key={index} onClick={()=>{this.selectPeriod(index)}}>{period.name}{this.state.index===index && this.check}</li>
                       ))} 
                       </ul>
                    </div>
                </div>
                    <Chart data={this.props.status}/>   
                </div>        
            </div>
    }
}

function mapState(state) {
    const { getStatus } = state;
    const {period, status, name, slug, loading} = getStatus;
    return {period, status, name, slug, loading};
}

const actionCreators = {
    setPeriod:statusByCountry.setPeriod,
    byCountryAndStatusAfterDate:statusByCountry.byCountryAndStatusAfterDate,
    byCountryAllStatus:statusByCountry.byCountryAllStatus,
}

export default connect(mapState, actionCreators)(Timeline);