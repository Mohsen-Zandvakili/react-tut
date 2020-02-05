import React from 'react';
import ReactDOM from 'react-dom';

const htmlRoot = document.getElementById('root');

const Greeting = (props) => {
  return (
    <div>
      Hello world from a React project!
      <p> Hello { props.name }. </p>
      <p> {`Hello ${props.name}, you are ${props.age} years old.`} </p>
    </div>
  );
}

ReactDOM.render(<Greeting name="Jone" age={30} />, htmlRoot);
