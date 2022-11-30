import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class  App extends Component {
  constructor() {
    super()
    
    this.state = {
      monsters :[],
    
    }
    console.log("constructor");
  }

componentDidMount(){
    console.log("component did mount");
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(()=>{
      return {monsters:users}
    }, ()=>{
      console.log(this.state);
    }))
  

}


  render() {
    console.log("render")
    return (
      <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={(event)=>{
        //console.log(event.target.value);
        console.log(this.state.monsters.name)
        let monsterArr = this.state.monsters
        console.log(monsterArr)
        //task try to update the state using array.filter

      }}

      />
      {this.state.monsters.map((monster)=>{
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        )
      })}
      </div>
    );
  }
  
}

export default App;
