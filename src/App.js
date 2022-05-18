import PersonList from './components/PersonList.js';
import React from "react";
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
import './App.css'

function App() {
  return (
      <div className="App">
          <h2 className='title'> The Rendered List of Axios Data </h2>
          <PersonAdd/>
          <PersonList/>
          <PersonRemove/>

      </div>
  )
}
export default App