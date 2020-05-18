import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons'


class Timeline extends React.Component{
    constructor(){
        super()
        this.state={
            index:0,
            periods:['cały okres', '1 tydzień', '2 tygodnie', '30 dni'],
            displayOptions:false,
        }
        this.listOfPeriods = React.createRef();
        this.displayOptions = this.displayOptions.bind(this)
        this.selectPeriod = this.selectPeriod.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    check = <FontAwesomeIcon icon={faCheck} color="#d5d5d5"/>
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
        }, ()=>{this.displayOptions()})
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
                <h4>Timeline</h4>
                <div ref={this.listOfPeriods} className="period-change">
                    <div onClick={this.displayOptions} className="select">
                        <span>{this.state.periods[this.state.index]}</span>
                        <FontAwesomeIcon icon={faChevronDown} color="#d5d5d5"/>
                    </div>
                    <div className="options" style={{display:this.state.displayOptions ? 'block' : 'none'}}>
                       <ul>
                       {this.state.periods.map((period, index)=>(
                           <li key={index} onClick={()=>{this.selectPeriod(index)}}>{period}{this.state.index===index && this.check}</li>
                       ))} 
                       </ul>
                    </div>
                </div>
                <div className="bg" style={{height:"150px"}}>

                </div>
            </div>
    }
}

export default Timeline