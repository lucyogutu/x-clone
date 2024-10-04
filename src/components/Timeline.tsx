import React from 'react'

const Timeline = () => {
  return (
    <div className='border-r-2 border-gray p-8'>
      <div>
        <h4><span>Amagedon</span> @amagedon</h4>
        <p >This is a test tweet. It is very long and descriptive.</p>
        <ul>
            <li>Reply</li>
            <li>Repost</li>
            <li>Like</li>
            <li>Views</li>
            <li>Bookmark</li>
            <li>Download</li>
        </ul>
      </div>
      <div>
        <h4><span>Xavier</span> @thexav</h4>
        <p>This is another test tweet. It is very long and descriptive. The second tweet actually.</p>
        <ul>
            <li>Reply</li>
            <li>Repost</li>
            <li>Like</li>
            <li>Views</li>
            <li>Bookmark</li>
            <li>Download</li>
        </ul>
      </div>
      <div>
        <h4><span>Amagedon</span> @amagedon</h4>
        <p>This is also a test tweet. It is very long and descriptive. This is the third tweet on the timeline</p>
        <ul>
            <li>Reply</li>
            <li>Repost</li>
            <li>Like</li>
            <li>Views</li>
            <li>Bookmark</li>
            <li>Download</li>
        </ul>
      </div>
    </div>
  )
}

export default Timeline
