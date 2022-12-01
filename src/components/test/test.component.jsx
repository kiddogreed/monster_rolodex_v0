import { Component } from "react";

class TestComponent extends Component {

  // {monsterArr.map((monster)=>{
  //   return (
  //     <div key={monster.id}>
  //       <h1>{monster.name}</h1>
  //     </div>
  //   )
  // })} 

  constructor() {
    super()
    
    this.state = {
      searchField:''
    
    }
  }
  // onSearchChange1 = (event)=>{
  //   this.setState(()=>{
  //     console.log(event)
  //   })
  // }
  onSearchChange1= (event)=>{
    const searchField = event.target.value.toLowerCase()
    console.log(searchField);
  }
render() {
  const {onSearchChange1} = this
  return (
    <div className="TestComponent">
      <input className="search-box" type="search-box" placeholder="search " onChange={onSearchChange1} />
    </div>
  )
}

}

export default TestComponent