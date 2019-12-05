import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'smiley-design'

class Navbar extends Component {
  render(){
    return(
      <NavBar navSidebarPosition={"left"}>
       <div>
         <button>Home</button>
       </div>
       <div>
         <button>News</button>
       </div>
      </NavBar>
    )
  }
}

Navbar.propTypes = {}

export default Navbar