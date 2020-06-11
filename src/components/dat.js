import React from 'react'
import axios from 'axios'

import CountUp from 'react-countup'

export class Data extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            total : 0,
            active : 0,
            deaths : 0,
            recovered : 0,
            mtotal : 0,
            mactive : 0,
            mdeaths : 0,
            mrecovered : 0,
            jtotal : 0,
            jactive : 0,
            jdeaths : 0,
            jrecovered : 0,
            dist : null
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
       this.setState=({dist : event.target.value,
                        
    })

    }
    componentDidMount(){
        

        axios({
            "method":"GET",
            "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key":"b007243022mshe13399ddf94d565p1008d8jsnee107e19718e",
            "useQueryString":true
            }
            })
            .then((response)=>{
                
              console.log(response)
                
              this.setState({
                 
                  total :response.data.total_values.confirmed,
                  active :response.data.total_values.active,
                  deaths :response.data.total_values.deaths,
                  recovered : response.data.total_values.recovered,
                  mtotal :response.data.state_wise.Maharashtra.confirmed,
                  mactive :response.data.state_wise.Maharashtra.active,
                  mdeaths :response.data.state_wise.Maharashtra.deaths,
                  mrecovered : response.data.state_wise.Maharashtra.recovered,
                  
                  jtotal :response.data.state_wise.Maharashtra.district.Jalgaon.confirmed,
                  jactive :response.data.state_wise.Maharashtra.district.Jalgaon.active,
                  jdeaths :response.data.state_wise.Maharashtra.district.Jalgaon.deceased,
                  jrecovered : response.data.state_wise.Maharashtra.district.Jalgaon.recovered,
              })
              
              
              
            })
            .catch((error)=>{
              console.log(error)
            })
  
        
    }

    render(){
        
        return (
        <div>
            <h1 className="Ind">INDIA</h1>
            <div className="India">
                <div className="headf">
                    <h1>CONFIRMED</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.total} duration={2} separator="," /></span>
                </div>
                <div className="headg">
                    <h1>ACTIVE</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.active} duration={2} separator="," /></span>
                </div>
                <div className="headh">
                    <h1>RECOVERED</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.recovered} duration={2} separator="," /></span>
                </div>
                <div className="headi">
                    <h1>DEATHS</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.deaths} duration={2} separator="," /></span>
                </div>
            </div>
            <h1 className="Ind">MAHARASHTRA</h1>
            <div className="India">
                <div className="headf">
                    <h1>CONFIRMED</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.mtotal} duration={2} separator="," /></span>
                </div>
                <div className="headg">
                    <h1>ACTIVE</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.mactive} duration={2} separator="," /></span>
                </div>
                <div className="headh">
                    <h1>RECOVERED</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.mrecovered} duration={2} separator="," /></span>
                </div>
                <div className="headi">
                    <h1>DEATHS</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.mdeaths} duration={2} separator="," /></span>
                </div>
                
            </div>
            <h1 className="Ind">JALGAON</h1>
            <div className="India">
                <div className="headf">
                    <h1>CONFIRMED</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.jtotal} duration={2} separator="," /></span>
                </div>
                <div className="headg">
                    <h1>ACTIVE</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.jactive} duration={2} separator="," /></span>
                </div>
                <div className="headh">
                    <h1>RECOVERED</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.jrecovered} duration={2} separator="," /></span>
                </div>
                <div className="headi">
                    <h1>DEATHS</h1>
                    <span className="hell"> <CountUp start={0} end={this.state.jdeaths} duration={2} separator="," /></span>
                </div>
                
            </div>
           
             
            </div>
        )
    }
}
export {data1}