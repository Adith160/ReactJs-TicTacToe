// App.js
import React from 'react';
import StartPage from './Components/Component/StartPage';
import Quotes from './Components/Component/Quotes';
import './Components/Styles/Main.css';

function App(props) {

  return (
    <div className="Main">
      <div className="Mobile">
         <StartPage/>
      </div>
      <Quotes />
    </div>
  );
}

export default App;
