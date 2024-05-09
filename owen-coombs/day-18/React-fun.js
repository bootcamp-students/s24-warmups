const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)

// class Greet extends React.Component
//   Hello() {
//     return <h1>Hello</h1>;
//   }



function Hello() {
  return <h1>Hello</h1>;

}
function World() {
  return <h2>World!</h2>
}

class Greet extends React.Component {
  render() {

    return <div>
      <Hello />
      <World />
    </div>;
  }
}
/*
  Ember's Feedback:
  - Good work!
  - Components are kind of like functions, just with some extra
    behavior that happens behind the scenes and some special rules to follow.
  - come back to this and rename the file to be all lowercase
*/
