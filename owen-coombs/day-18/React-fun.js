const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)

// class Greet extends React.Component
//   Hello() {
//     return <h1>Hello</h1>;
//   }


  
function Hello(){
  return <h1>Hello</h1>;
  
}
function World(){
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
