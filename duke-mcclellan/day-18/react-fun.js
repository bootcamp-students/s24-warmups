const React = require('react');


function Hello() {
  return (<h1>Hello</h1>)
}


function World() {
  return (<h2>World!</h2>)
}

class Greet extends React.Component {
  render() {
    return <div>
      <Hello />
      <World />
    </div>
  }
}
/*
  Ember's Feedback:
  - Good job!
  - Components are just like functions
*/
