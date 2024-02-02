import React from 'react'
import '../styles/components/Navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import {toast} from 'react-toastify'

const Navbar = () => {

  const logoutFunch = async() => {

    toast.success("Çıkış işlemi gerçekleştiriliyor.")
    await signOut(auth)
    setTimeout(() => {
      window.location="/"
    },1200)
   
  }
  return (
    <div className='navbar'>
        <div className='navbar-left'>FIREBASE</div>
        <div onClick={logoutFunch} className='navbar-right'>Logout</div>
    </div>
  )
}

export default Navbar