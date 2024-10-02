import React from 'react'

const Search = () => {
  return (
    <div>
      <input type="search" id="xsearch" name="xsearch" />
      <div>
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button>Subscribe</button>
      </div>
      <div>
        <h2>Trends for you</h2>

        <div >
            <h5>Trending in Kenya</h5>
            <h3>World War 3</h3>
            <h5>122K posts</h5>
        </div>
        <div >
            <h5>Trending in Kenya</h5>
            <h3>State House</h3>
            <h5>130K posts</h5>
        </div>
        <div >
            <h5>Trending in Kenya</h5>
            <h3>#MaandamanoTuesday</h3>
            <h5>100K posts</h5>
        </div>
        <div >
            <h5>Trending in Kenya</h5>
            <h3>#OccupyParliament</h3>
            <h5>150K posts</h5>
        </div>

      </div>
    </div>
  )
}

export default Search
