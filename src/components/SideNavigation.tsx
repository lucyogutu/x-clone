import React from 'react'

import logo from '../assets/logo.svg';

const SideNavigation = () => {
  return (
    <div className='border-r-2 border-gray p-8'>
      <img src={logo} alt='X logo' />
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Grok</li>
        <li>Bookmarks</li>
        <li>Jobs</li>
        <li>Communities</li>
        <li>Premium</li>
        <li>Business</li>
        <li>Profile</li>
        <li>More</li>
      </ul>
      <div className='border-r-2 border-black'></div>
    </div>
  )
}

export default SideNavigation
