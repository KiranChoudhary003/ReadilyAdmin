import React from 'react'
import Wrapper from './style'
import profile from '../../assets/Profile.png'

const Header = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h1>Readily</h1>
        <img src={profile} alt="Profile" /></div>
    </Wrapper>
  )
}

export default Header
