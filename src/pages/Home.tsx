import React from 'react'

import SideNavigation from '../components/SideNavigation';
import Timeline from '../components/Timeline';
import Search from '../components/Search';

const Home = () => {
  return (
      <div className="box-border grid grid-cols-3 mx-auto w-3/4 mt">
      <SideNavigation />
      <Timeline />
      <Search />
    </div> 
    
  )
}

export default Home