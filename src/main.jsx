import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfIu-YYzoLLNIzjAkl0E9EWJSYDBfLf4A",
  authDomain: "nahuel-react.firebaseapp.com",
  projectId: "nahuel-react",
  storageBucket: "nahuel-react.appspot.com",
  messagingSenderId: "296492227640",
  appId: "1:296492227640:web:f57f6ea5fd7e667b659acd"
};

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,);