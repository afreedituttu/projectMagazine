import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './Context/AuthContext'
import axios from 'axios';

async function isAlive(){
  const data = await axios.get('https://afreedituttu.github.io/authenticate/');
  console.log(data);
  console.log(data.data);
  return data.data;
}
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
       {isAlive()?<App />:"Application Failed"}
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);