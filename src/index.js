import React from 'react'
import ReactDOM from 'react-dom'

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

const Greeting = () => {
  return React.createElement('h1', {}, React.createElement('h1', {}, ''))
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
