import React from 'react';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons'


class Timetable extends React.Component{
    constructor(){
        super()
        this.state={
            period:'',
        }
    }
    check = <FontAwesomeIcon icon={faCheck} color="#d5d5d5"/>
    render(){
    return <div className="timetable">
                    <h4>Timetable</h4>
                <div className="period-change">
                    <div className="select">
                        <span>(this.state.period)</span>
                        <FontAwesomeIcon icon={faChevronDown} color="#d5d5d5"/>
                    </div>
                    <div className="options">
                        <ul>
                            <li>cały okres{this.check}</li>
                            <li>1 tydzień</li>
                            <li>2 tygodnie</li>
                            <li>30 dni</li>
                        </ul>
                    </div>
                </div>
                <div className="bg" style={{height:"150px"}}>

                </div>

            </div>
    }
}

export default Timetable