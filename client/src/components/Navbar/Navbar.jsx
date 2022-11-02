import React from 'react'
import './navbar.scss'
import logo from '../../images/navbar/spunemd-logo.png'
import pencil from '../../images/navbar/pencil.png'
import Rightbar from '../Rightbar/Rightbar'
import Leftbar from '../Leftbar/Leftbar'

export default function Navbar() {
  return (
    <>
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-logo'>
                    <img src={logo} alt='Logo' />
                    <span>ce gândești</span>
                </div>
                <div className='nav-middle-wrapper'>
                    <div className='search'>
                        <input 
                            placeholder='Caută'
                        />
                    </div>
                    <div className='spune'>
                        <button className='spune-bttn'>
                            <img src={pencil} alt='Spune' />
                            <span>Spune</span>
                        </button>
                    </div>
                </div>
                <div className='nav-log-into'>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="icon icon-tabler icon-tabler-login"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    >
                        <path 
                        stroke="none" 
                        d="M0 0h24v24H0z" 
                        fill="none">
                        </path>
                        <path 
                        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2">
                        </path>
                        <path 
                        d="M20 12h-13l3 -3m0 6l-3 -3">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        <Rightbar />
        <Leftbar />
    </>
  )
}
