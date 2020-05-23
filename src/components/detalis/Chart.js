import React from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';

export default class Chart extends React.Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.data!==this.props.data){
      const data = this.props.data.map((element)=>{
        return {date:new Date(element.Date).toISOString().split('T')[0], confirmed:element.Confirmed, deaths:element.Deaths, recovered:element.Recovered}
      })
      this.setState({
        data
      })
    }
  }
  render() {
    return (
      <div style={{ width: '100%', height: 200 }}>
       <ResponsiveContainer>
      <AreaChart
        data={this.state.data}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
      >
        <defs>
    <linearGradient id="deaths" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#d40000" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#d40000" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#58D415" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#58D415" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="confirmed" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#15D4B7" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#15D4B7" stopOpacity={0}/>
    </linearGradient>
  </defs>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis/>
        <Tooltip />
        <Legend iconType='rect' margin={{ top: 15 }}/>
        <Area type="monotone" dataKey="deaths" stroke="#d40000" fillOpacity={1} fill="url(#deaths)" />
        <Area type="monotone" dataKey="recovered" stroke="#58D415" fillOpacity={1} fill="url(#recovered)"/>
        <Area type="monotone" dataKey="confirmed" stroke="#15D4B7" fillOpacity={1} fill="url(#confirmed)"/>
      </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
