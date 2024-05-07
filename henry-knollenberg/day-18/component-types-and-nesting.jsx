const React = require('react');

const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>;

class Greet extends React.Component {
  render () {
    return <div><Hello /><World /></div>;
  }
}
/*
  Ember's Feedback:
  - Good job!
  - React component are kind of like functions, but with a bunch of extra
    rules and behaviors
*/
