import React from 'react';
import ReactDOM from 'react-dom';

const htmlRoot = document.getElementById('root');

const Greeting = (props) => {
  return (
    <div>
      Hello world from a React project!
      <h2> Hello { props.name }. </h2>
      <h3> {`Hello ${props.name}, you are ${props.age} years old.`} </h3>
    </div>
  );
}

ReactDOM.render(<Greeting name="Jone" age={30} />, htmlRoot);
