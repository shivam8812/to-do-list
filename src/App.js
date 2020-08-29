import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      completedItems:[],
      currentItem: {
         text: '',key:''
      }
    };
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleComplete=this.handleComplete.bind(this);
  }
  
  handleInput=(e)=>{
      this.setState({
         currentItem:{
           text: e.target.value, key: Date.now()
         }
      })
  }
  handleSubmit(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      this.setState({
        items:[newItem,...this.state.items],
        currentItem:{
          text:'',key:''
        }
      })
    }
  }
  handleDelete(key){
    var array = this.state.items.filter(item => item.key!==key)
    this.setState({
       items:array,
    })
  }
  handleComplete(key){
    var newitem=this.state.items.filter(item => item.key!==key);
    this.setState({
      completedItems:[...this.state.completedItems,newitem]
    })
    var array = this.state.items.filter(item => item.key!==key)
    this.setState({
       items:array,
    })
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="todo">
          <h1>ToDO List</h1>
        </div>
      </header>
      <form onSubmit={this.handleSubmit}> 
      <input className="ipt" type="text" placeholder="todos..." value={this.state.currentItem.text} 
      onChange={this.handleInput}    />
      <button className="add" onClick={this.handleSubmit}>ADD</button>
      </form>
      <div className="todoCont">
      <ListItems items={this.state.items} completedItems={this.state.completedItems}
       handleDelete={this.handleDelete} handleComplete={this.handleComplete}/>
      </div>
    </div>
  );
  }
}

export default App;
