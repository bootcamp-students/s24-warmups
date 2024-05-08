const React = require("react");

const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>;

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
//Create a react component using the arrow function similar to the
//      instructions
//Utilize the class structure exactly like the instructions
/*
  Ember's Feedback:
  - Great job!
*/
