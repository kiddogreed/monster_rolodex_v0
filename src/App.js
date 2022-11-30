
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
class  App extends Component {
  
  constructor() {
    super()
    
    this.state = {
      monsters :[],
      searchField:''
    
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

onSearchChange = (event) =>{
  
    const searchField = event.target.value.toLowerCase()

    this.setState(()=>{
      return {
        searchField
        }
      })
  
}


  render() {
    console.log("render")
    const {monsters, searchField, onSearchChange} = this.state;
    let monsterArr = monsters.filter((monster)=>{
        return  monster.name.toLowerCase().includes(searchField)
        })

    return (
      <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}

      />
      {/* {monsterArr.map((monster)=>{
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        )
      })} */}
      <CardList />
      </div>
    );
  }
  
}

export default App;
