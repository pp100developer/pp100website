import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

import {links} from '../data.js'

import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'
import Logo from '../images/pp100logo.JPG'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container navbar-container">
            <div className='navbarLogo'>
                <Link to="/" className='logoImg' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="pp100logo" />
                </Link>
                <Link to="/" className='logoTitle' onClick={() => setIsNavShowing(false)}>필로프리셉 100</Link>
            </div>
            
            <ul className={`links ${isNavShowing ? 'show-navbar' :
            'hide-navbar'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li>
                                <NavLink key={index} to={path} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='navbarToggleBtn' onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <GiHamburgerMenu/>
                } 
            </button>
        </div>
    </nav>
  )
}

export default Navbar