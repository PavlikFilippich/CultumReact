import React, { Component } from 'react';
import './App.css';
import FirstTab from './components/content/FirstTab.js';
import SecondTab from './components/content/SecondTab';
import ThirdTab from './components/content/ThirdTab';

class MyTable extends Component {
    state = {
      active:null,
    };
  
  contentOne = (indexTab)=>{
    if(indexTab === 1) {
      this.currComponent = <FirstTab/>;
    }
    else if(indexTab === 2) {
      this.currComponent = <SecondTab/>;
    }
    else if(indexTab === 3) {
      this.currComponent = <ThirdTab/>;
    }
    else {
      this.currComponent = null;
    }
  }  

  activeTd(number) {
    this.setState({ active: number })
  }

 
  render() {
    return(
      <table>
        <tbody>
        <tr className="trButton">
          <td
          className={this.state.active === 1 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(1) ; this.activeTd(1)}}
          >One item</td>
          <td
          className={this.state.active === 2 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(2);this.activeTd(2)}}
          >Two item</td>
          <td
          className={this.state.active === 3 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(3);this.activeTd(3)}}
          >Three item</td>
        </tr>
        <tr className="content">{this.currComponent}</tr>
        </tbody>
      </table>
    )
  }
}

export default MyTable;
