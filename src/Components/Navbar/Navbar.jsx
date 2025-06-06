import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

const[menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img className="logo" src={logo} width={90}/>
        <ul className="nav-menu">
            <li className="homeB"><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li className="portB"><AnchorLink className='anchor-link'  href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink></li>
            <li className="aboutB"><AnchorLink className='anchor-link'  href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
            <div className="nav-connect"><AnchorLink className='anchor-link-con' href='#contact'>Contact Me</AnchorLink></div>
        </ul>


    </div>
  )
}

export default Navbar