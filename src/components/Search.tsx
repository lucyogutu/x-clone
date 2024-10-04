import React from 'react'

const Search = () => {
  return (
    <div className='p-8'>
      <input type="search" id="xsearch" name="xsearch" />
      <div className='container rounded-lg border-2	p-5 mb-5'>
        <h2 className='font-semibold text-xl inline-block'>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button>Subscribe</button>
      </div>
      <div className='container rounded-lg border-2	p-5 inline-block'>
        <h2 className='font-semibold text-xl mb-5'>Trends for you</h2>

        <div className='mb-5'>
            <h5 className='text-sm font-medium text-gray-500'>Trending in Kenya</h5>
            <h3 className='font-medium text-lg text-gray'>World War 3</h3>
            <h5 className='text-xs text-gray-500'>122K posts</h5>
        </div>
        <div className='mb-5'>
            <h5 className='text-sm font-medium text-gray-500'>Trending in Kenya</h5>
            <h3 className='font-medium text-lg text-gray'>State House</h3>
            <h5 className='text-xs text-gray-500'>130K posts</h5>
        </div>
        <div className='mb-5' >
            <h5 className='text-sm font-medium text-gray-500'>Trending in Kenya</h5>
            <h3 className='font-medium text-lg'>#MaandamanoTuesday</h3>
            <h5 className='text-xs text-gray-500'>100K posts</h5>
        </div>
        <div >
            <h5 className='text-sm font-medium text-gray-500'>Trending in Kenya</h5>
            <h3 className='font-medium text-lg text-gray'>#OccupyParliament</h3>
            <h5 className='text-xs text-gray-500'>150K posts</h5>
        </div>

      </div>
    </div>
  )
}

export default Search
