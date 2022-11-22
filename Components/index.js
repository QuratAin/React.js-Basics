import React from 'react';
import ReactDOM from 'react-dom';

// ================== simple component ===================

const Message = () => {
  return (
    <h4>Hey there! I am Qurat and this is my first component.</h4>
  );
}

// ================= nesting ==========================

const Person = () => <h1>Qurat Ain</h1>;

function Greeting() {
  return (
      <div>
        <Person />         
        <Message />
      </div>
  );
}

// ================ alternative approach: ================

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello there!');
// }; 
// arrow function has limitations when we have nested elements (loc increase) 

// ==================== Rules =========================

// we can always return only one element
// to return multiple html elements, you should wrap everything in one parent div/section/fragement. 
// instead of div we can use html semantics (section,article,header,footer etc) or: 
// <React.Fragement> </React.Fragement> (or just <> </> ) as parent elements in return.
// use camelCase in react for attributes (className, onClick etc)
// opening tag should be on same line as return. 
// If you want to write from next line then add parenthesis with return.

ReactDOM.render(<Greeting />, document.getElementById('root'));
