import React, { Component } from 'react';
import './App.css';
import FirstTab from './components/content/FirstTab.js';
import SecondTab from './components/content/SecondTab';
import ThirdTab from './components/content/ThirdTab';

class MyTable extends Component {
    state = {
      currComponent: <FirstTab/>,
      active:1,
    };
  
  contentOne = (ComponentName)=>{
    this.setState({currComponent: <ComponentName />});
  }

  activeTd(number) {
    this.setState({ active: number })
  }

 
  render() {
    const {currComponent}=this.state;
    return(
      <table>
        <tbody>
        <tr className="trButton">
          <td
          className={this.state.active === 1 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(FirstTab) ; this.activeTd(1)}}
          >One item</td>
          <td
          className={this.state.active === 2 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(SecondTab);this.activeTd(2)}}
          >Two item</td>
          <td
          className={this.state.active === 3 ? 'active' : 'buttonText'}
          onClick={ () => {this.contentOne(ThirdTab);this.activeTd(3)}}
          >Three item</td>
        </tr>
        <tr className="content">{currComponent}</tr>
        </tbody>
      </table>
    )
  }
}

export default MyTable;