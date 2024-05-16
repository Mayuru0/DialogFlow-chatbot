import React from 'react';
import Dialogflow from './Dialogflow.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Skyline Chatbot</h1>
        <img src='./public/v-unscreen.gif'/>
      </header>
      <Dialogflow />
    </div>
  );
}

export default App;
