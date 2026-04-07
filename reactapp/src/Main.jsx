// import React from 'react'

// function Menu(props) {
//   return (
//     <>
//     <div>Menu</div>
//     <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
//     <button
//           className="counter"
//           onClick={() => props.setCount((count) => count + 1)}
//         >
//           Count is {props.count}
//         </button>
//         </>
//   )
// }

// export default Menu
import React, { Component } from 'react'

export default class menu extends Component {
  render() {
    return (
    <>
      <div>menu</div>
      
      <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
      </ul>
      <button
           className="counter"
           onClick={() => this.props.setCount((count) => count + 1)}
        >
          Count is {this.props.count}
    </button>
    </>
    )
  }
}