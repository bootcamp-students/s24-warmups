//everything is based on compounds
//class compounds
//
const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>;

class Greet extends React.Component {
  render() {
    return <div><Hello /><World /></div>;
  }
}
/*
  Ember's Feedback:
  - Good job!
  - Hopefully you never need to work with class components
*/
