import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {counter, addGun, removeGun, addGunAsync} from './index.redux';

const store = createStore(counter, applyMiddleware(thunk))

// 如果使用chrome的react调试工具，则在这里开启这个配置
// const store = createStore(counter, compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension?window.devToolsExtension():f=>f
// ))

function render(){
    ReactDOM.render(<App 
        store={store} 
        addGun={addGun} 
        removeGun={removeGun} 
        addGunAsync = {addGunAsync}
        />, document.getElementById('root'));
    
    // ReactDOM.render(
    //     <Provider store={store}>
    //         <App />
    //     </Provider>,
    //     document.getElementById('root')
    // );
}
render();

// 必须去subscribe一下，才可以看到action运行之后的结果
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
