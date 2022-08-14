import React from 'react';
import './App.css';
import { useState } from 'react';
import { SyntheticEvent } from 'react';

const norussian = require('./assets/no-russian.mp4');

// i think it's because the app is frozen by cringe typescript wanting me to define the app of what it really is so ill do that right now you fucking cringe ass!!!!

interface Props {
 text: string
}

// needed to specicy else return null, haha xD!!!
// one day ill fucking [redacted] them all
// why is the code unreachable

/*
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {['a', 'b', 'c'].map(element => {
        return <h2 key={element}>{element}</h2>;
      })}
    </React.Fragment>
  );
};

export default App;
 */
export default function App() {
  const [globalState, setGlobalState] = useState(0)
  const handleEvent = (e: SyntheticEvent<HTMLDivElement>) => {
 setGlobalState(globalState + 1);
  };
  if (globalState === 0)
   return (
  <>
  <div className="App">
    <h1 style={{
      color: "red",

      }}>TOP SECRET</h1>
    <h1>remember no russian</h1>
    <button onClick={()=> setGlobalState(globalState + 1)} style={{
      width: "100px",
      height: "100px",

      }}>
      No Russian
    </button>
  </div>
    
  </>
  );else if ( globalState === 1 ) return (
    <div>
      <video autoPlay style={{
      position: "fixed",
      right: "1",
      left: "1",
      bottom: "0",
      minWidth: "100%",
      minHeight: "100%",
        }}>
<source src={norussian} type="video/mp4"/>
      </video>
      
    </div>
  ); 
  else return null
} 
      







