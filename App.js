import React, { Component } from 'react';
import './App.css';
import FirstTab from './components/content/FirstTab.js';
import SecondTab from './components/content/SecondTab';
import ThirdTab from './components/content/ThirdTab';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currComponent: null,
    };
    
  }

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















// class MyTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currComponent: null,
//     };
    
//   }


//   contentOne = (ComponentName)=>{
//     // let name = this.state;
//     // let currComponent = null;
//     // if(indexTab === 1) {
//     //   currComponent = <FirstTab/>;
//     // }
//     // else if(indexTab === 2) {
//     //   currComponent = <span>sdfs</span>;
//     // }
//     // else if(indexTab === 3) {
//     //   currComponent = null;
//     // }
//     // else {
//     //   currComponent = null;
//     // }
//     // { FirstTab || null};


//     this.setState({currComponent: <ComponentName />});
//     // console.log({name});
//   }
//   // showCurrTab = () => {
//   //   const {curTab} = this.state;
//   //   console.log(curTab);
//   //   switch (curTab){
//   //     case 1:
//   //       return (
//   //         <div>
//   //           <FirstTab />  
//   //         </div>  
          
//   //         );
//   //         break;
//   //     case 2:
        
//   //         <p>Ulu</p>
//   //       break;
//   //     case 3:
//   //       return null;
//   //       break;
//   //     default:
//   //       return null;
//   //   } 
//   // }
//   render() {
//     const {currComponent}=this.state;
//     return(
//       <div >
//       <button
//         className = "buttonText"
//         onClick={ () => this.contentOne(FirstTab)}>
//           <span>One item</span>
//         </button>

//         <button
//         className = "buttonText"
//         onClick={ () => this.contentOne(SecondTab)}
//         >
//           <span>Two item</span>
//         </button>

//         <button
//          className = "buttonText"
//          onClick={ () => this.contentOne(ThirdTab)}>
//           <span>Three item</span>
//         </button>
//         <div className="content">
//          {currComponent}
//         </div>
//       </div>
//     )
//   }
// }

// export default MyTable;