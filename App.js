import React, { Component } from 'react';
import './App.css';
import FirstTab from './components/content/FirstTab.js';
import SecondTab from './components/content/SecondTab';
import ThirdTab from './components/content/ThirdTab';

class MyTable extends Component {
    state = {
      currComponent: null,
    };
  
  contentOne = (ComponentName)=>{
    this.setState({currComponent: <ComponentName />});
  }
 
  render() {
    const {currComponent}=this.state;
    return(
      <div>
      <button
        className = "buttonText"
        onClick={ () => this.contentOne(FirstTab)}>
          <span>One item</span>
        </button>

        <button
        className = "buttonText"
        onClick={ () => this.contentOne(SecondTab)}
        >
          <span>Two item</span>
        </button>

        <button
         className = "buttonText"
         onClick={ () => this.contentOne(ThirdTab)}>
          <span>Three item</span>
        </button>
        <div className="content">
         {currComponent}
        </div>
      </div>
    )
  }
}

export default MyTable;