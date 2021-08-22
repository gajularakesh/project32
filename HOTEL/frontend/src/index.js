import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthContext';
import DataContextProvider from './Context/DataContext';
import HomeContextProvider from './Context/HomeContext';
import HotelbookContextProvider from './Context/HotelbookContext';

ReactDOM.render(
  <React.StrictMode>   
     <DataContextProvider>
     <HotelbookContextProvider>
      <AuthProvider>
      <HomeContextProvider>
            <App />
      </HomeContextProvider>
      </AuthProvider>
      </HotelbookContextProvider>
     </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
