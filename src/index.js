import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/reducers/configureStore';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
//root
const store = configureStore();

// ReactDOM.render(

  
//   <Provider store = {store}>
//    <App/>
//   </Provider> , document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     <Provider store = {store}>
   <App/>
  </Provider> 
  </StrictMode>
  
);