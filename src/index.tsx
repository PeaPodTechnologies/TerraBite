import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthContext';

// import firebase from 'firebase/app';
// import 'firebase/functions';
// import 'firebase/auth';
// import 'firebase/firestore';
// if(window.location.hostname === 'localhost'){
//   firebase.auth().useEmulator('http://localhost:9099');
//   firebase.functions().useEmulator('localhost', 5001);
//   firebase.firestore().useEmulator('localhost', 8080);
// }

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
