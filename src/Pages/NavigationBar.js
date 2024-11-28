import React from 'react'
import '../Style/NavigationBar.css';
import AdeonaLogo from '../componant/AdeonaLogo.png';

export default function NavigationBar() {

const HomeLogin = () => window.location.href ='/';

  return (
    <div id='NavBar'>
        <div id='NavBar-Data'>
            {/* <img src={AdeonaLogo} alt='Adeona Logo'  id='NavImg'/> */}
            <span id='NavBar-Text'>Adeona Technology</span> 
            {/* <button id='NavBar-Btn' onClick={HomeLogin}> Login </button>  */}
        </div> 
    </div>
  )
}
