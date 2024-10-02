import React from 'react'

import SideNavigation from '../components/SideNavigation';
import Timeline from '../components/Timeline';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
      <SideNavigation />
      <Timeline />
      <Search />
    </div>
  )
}

export default Home