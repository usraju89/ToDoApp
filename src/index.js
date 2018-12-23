import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Todo';

function App() {
  return (
    <h1>
      App Component 
      <ToDo />
    </h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

