
// import React from 'react'

//function component
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }


//arrow function component

// import React from 'react'

// const App = () => {
//   return (
//     <div>Arrow Function</div>
//   )
// }

// export default App;


import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        Class Component
      </div>
    )
  }
}