import React from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from "../../assets/logo.svg"



function Navbar() {

  const Menu = () => (
      <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>What is GPT3?</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </>
  )

  const [toggleMenu , setToggleMenu] = React.useState(false)

  function handleChange(){
    setToggleMenu(prevmenu => !prevmenu)
  }

  return (
    <div className='navbar'>
      <div className='navbar-links'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='navbar-links-container'>
          <Menu />
      </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button' className='btn'> Sign Up</button>
      </div>
      <div className='navbar-menu' onClick={handleChange}>
        {toggleMenu ? <RiCloseLine color="#fff" size={27} /> : <RiMenu3Line color='#fff' size={27} /> }
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container-links'>
              <Menu />
              <div className='navbar-sign-mobile'>
                <p>Sign in</p>
                <button type='button' className='btn'> Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar