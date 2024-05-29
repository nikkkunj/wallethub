/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter(props){

    const [counter,setCounter] = useState(0);
    const counterHanlde=()=>{
      setCounter(counter+1)
    }
    return (
      <div id="mainArea">
        <p>button count: <span>{counter}</span></p>
        <button id="mainButton" onClick={counterHanlde}>Increase</button>
      </div>
    );
  }

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);