import React from 'react'
import ReactDOM from 'react-dom'

function Greeting() {
  return <h4>This is one of my first components</h4>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))