import React from 'react'
import '../styles/pages/Home.css'

const Home = ({ users }) => {
  return (
    <div className='home'>
      <span>{users?.email} </span>
      HOŞGELDİNİZ.
    </div>
  )
}

export default Home