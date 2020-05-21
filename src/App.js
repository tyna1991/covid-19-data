import React from 'react';
import Detalis from './components/detalis/Detalis'
import Map from './components/map/Map'
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <>
    {props.message && <p className="error-message">{props.message}</p>}
    <div className="App">
      <Map/>
      <Detalis/>
    </div>
    </>
  );
}

function mapState(state) {
  const { alert } = state;
  const {message} = alert;
  return { message };
}

const actionCreators = {}

export default connect(mapState, actionCreators)(App);
