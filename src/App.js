import React, { Component } from 'react';
import './App.css';
import FirstTab from './components/content/FirstTab.js';
import SecondTab from './components/content/SecondTab';
import ThirdTab from './components/content/ThirdTab';

class MyTable extends Component {
  state = {
    key:1,
  };

  components={
    1:<FirstTab/>,
    2:<SecondTab/>,
    3:<ThirdTab/>
  }

  contentOne = (key)=>{    
    this.setState({ key });
  }  
 
  render() {
    return(
      <table>
        <tbody>
        <tr className="trButton">
          <td
          className={this.state.key === 1 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(1)}}
          >One item</td>
          <td
          className={this.state.key === 2 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(2)}}
          >Two item</td>
          <td
          className={this.state.key === 3 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(3)}}
          >Three item</td>
        </tr>
        <tr className="content"><span>{this.components[this.state.key]}</span></tr>
        </tbody>
      </table>
    )
  }
}

export default MyTable;
