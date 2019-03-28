import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux';
// import logo from './logo.svg';
import './App.css';

// const mapStatetoProps = (state)=>{
//   return {num: state}
// }
// const actionCreators = {addGun, removeGun, addGunAsync}
// App = connect(mapStatetoProps, actionCreators)(App)

// 通过babel-plugin-transform-decorators-legacy使得app支持装饰器传值
// @connect(
//   state=>({num: state}),
//   {addGun, removeGun, addGunAsync}
// )
class App extends Component {
  render(){
    // 得到store后，就可以用它内部的方法了
    const store = this.props.store
    const addGun = this.props.addGun
    const addGunAsync = this.props.addGunAsync

    const num = store.getState()
    return (
      <div>
        <div>now go {num}</div>
        <button onClick={()=>store.dispatch(addGun())}>plus one</button>
        <button onClick={()=>store.dispatch(addGunAsync())}>Wait to give</button>
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
