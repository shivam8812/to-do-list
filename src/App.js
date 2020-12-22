import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }
  render() {
  return (
    <div className="App">
      <header className="App-content">
        <div className="todo">
          <h1>Pricey, your personal shopping assistant</h1>
        </div>
    <h3>What Pricey do..??</h3>
    <ul>
      <li>Remembers all your products</li>
      <li>Reminds you to buy this product</li>
      <li>Reminds you whenever the price of your product drops</li>
    </ul>
    </header>
    </div>
  );
  }
}

export default App;
