import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        name: '',
        badteam: [],
        team: []
      }
  }
  getCharacter() {
    var random = Math.floor(Math.random()* 9);
    axios.get('https://swapi.co/api/people/').then(response => {
      this.setState({
        name: response.data.results[random].name
      })
    })
  }
  assignCharacterGood() {
    var newTeam = [...this.state.team, this.state.name]
    this.setState({
      team: newTeam

    })
  }

  assignCharacterBad() {
    var newBadteam = [...this.state.badteam, this.state.name]
    this.setState({
      badteam: newBadteam

    })
  }

  render(){
    return(
  <div> 
        <h1 className = "maintitle ">STAR WARS CHARACTER EDITOR </h1>
        <div>
    <div className="main">
      <div className = "mainbox">  
        <div className = "lightside1" >
          
          {this.state.name}
        </div>
        
        <div className = "lightside2" onClick = {() => this.getCharacter()}> GET HERO </div>
      </div>

      
      <div className = "subBox">
          <div className = "btn1" onClick = {() => this.assignCharacterGood()}> Lightside </div>
          <div className="btn2" onClick = {() => this.assignCharacterBad()}> Darkside </div>  
      </div>
    </div>
   </div>
     <div className = "goodside">
     <h1> Light Side </h1>

     {this.state.team.map( function(p1){
       return <div> {p1} </div>
     }
     )}
     </div>

     <div className = "badside">
     <h1> Dark Side </h1>

   
     {this.state.badteam.map( function(p1){
       return <div> {p1} </div>
     }
     )}
    
   
      <div className = "darklist">

      </div>
      </div>
      </div>   
    )   
  }
}
export default App;
 