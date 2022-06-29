import './App.css';
import { useEffect } from 'react'
import axios from 'axios';
import Header from './Header';
import Form from './Form';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
