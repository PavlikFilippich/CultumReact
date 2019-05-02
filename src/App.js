import React, { Component } from 'react';
import './App.css';
import FirstTab from './components/content/FirstTab.js';
import SecondTab from './components/content/SecondTab';
import ThirdTab from './components/content/ThirdTab';

class MyTable extends Component {
  state = {
    array:[
      {id:1,component:<FirstTab/>, name:"One item"},
      {id:2,component:<SecondTab/>, name:"Two Item"},
      {id:3,component:<ThirdTab/>, name:"Three item"},
    ],
    currComponentId: 1
  };

  changeComponentName = (idComponent) => {
    this.setState({currComponentId:idComponent});
  }
 
  render() {
    const selectedElement = this.state.array.find(
      (item) => item.id === this.state.currComponentId
    );
    return(
      <table>
        <tbody>
          <tr className="trButton">
            {
              this.state.array.map( (element) => {
                return (
                  <td 
                    className={this.state.currComponentId === element.id ? 'active' : 'buttonText'}
                    onClick={ () => this.changeComponentName(element.id)}
                    >{element.name}
                  </td>
                )
              }) 
            }
          </tr>
          <tr className="content">
           {selectedElement.component}   
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MyTable;