/*precept
parameters- create two components and nest them within a greet component
return- Hello World in a greet parent
example- const Nest=()=><div><Title /><Title /></div>;
concerns- nesting components in a greet parent
explain- created two components and nest them inside the greet parent component.
positive self talk-
translate-
*/

const React = require('react'); 
const Hello=()=><h1>Hello</h1>; 
const World=()=><h2>World!</h2>;

class Greet extends React.Component {
  render() {
    return <div><Hello /><World /></div>;
  }
}