const React = require('react');

//add Hello, World and Greet components here

//return a Hello h1 heading
function Hello() {
  return (
    <h1>Hello</h1>
  )
}

//return a World h2 heading
function World() {
  return (
    <h2>World!</h2>
  )
}

//create a class named Greet that extends React Component, then render and return Hello and World together
class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
        <World/>
      </div>
    )
  }
}
/*
  Ember's Feedback:
  - Good job!
  - React components are like functions, but they are run every time state in the component updates, or if the state of the parent
    component updates. That unidirectional data flow that React wants to enforce is part of the what makes React such a popular library.
*/
