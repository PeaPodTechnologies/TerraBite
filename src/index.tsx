import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import firebase from 'firebase/app';
// import 'firebase/functions';
import AuthProvider from './contexts/AuthContext';

// if(window.location.hostname === 'localhost'){
//   firebase.auth().useEmulator('http://localhost:9099');
//   firebase.functions().useEmulator('localhost', 5001);
// }

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
