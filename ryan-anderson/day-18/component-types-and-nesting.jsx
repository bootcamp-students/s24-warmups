const React = require('react');



class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
class World extends React.Component {
  render() {
    return <h2>World!</h2>;
  }
}

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}
/*
  Ember's Feedback:
  - Good job!
*/
