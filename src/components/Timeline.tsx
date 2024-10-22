import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faShareNodes, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Timeline = () => {
  return (
    <div className='border-r-2 border-gray mt-5'>
      <div className='border-t-2 border-gray p-5'>
        <h4 className='mb-3'><span className='font-bold'>Amagedon</span> <span className='text-gray-500'>@amagedon</span> </h4>
        <p >This is a test tweet. It is very long and descriptive.</p>
        <ul className='flex flex-nowrap justify-between mt-3'>
            <li><FontAwesomeIcon icon={faComment} /></li>
            <li><FontAwesomeIcon icon={faRetweet} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faChartSimple} /></li>
            <li><FontAwesomeIcon icon={faBookmark} /></li>
            <li><FontAwesomeIcon icon={faShareNodes} /></li>
        </ul>
      </div>
      <div className='border-t-2 border-gray p-5'>
        <h4 className='mb-3'><span className='font-bold'>Xavier</span>  <span className='text-gray-500'>@thexav</span></h4>
        <p>This is another test tweet. It is very long and descriptive. The second tweet actually.</p>
        <ul className='flex flex-nowrap justify-between mt-3'>
            <li><FontAwesomeIcon icon={faComment} /></li>
            <li><FontAwesomeIcon icon={faRetweet} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faChartSimple} /></li>
            <li><FontAwesomeIcon icon={faBookmark} /></li>
            <li><FontAwesomeIcon icon={faShareNodes} /></li>
        </ul>
      </div >
      <div className='border-t-2 border-gray p-5'>
        <h4 className='mb-3'><span className='font-bold'>Amagedon</span> <span className='text-gray-500'>@amagedon</span></h4>
        <p>This is also a test tweet. It is very long and descriptive. This is the third tweet on the timeline</p>
        <ul className='flex flex-nowrap justify-between mt-3'>
            <li><FontAwesomeIcon icon={faComment} /></li>
            <li><FontAwesomeIcon icon={faRetweet} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faChartSimple} /></li>
            <li><FontAwesomeIcon icon={faBookmark} /></li>
            <li><FontAwesomeIcon icon={faShareNodes} /></li>
        </ul>
      </div>
      <div className='border-t-2 border-gray p-5'>
        <h4 className='mb-3'><span className='font-bold'>Amagedon</span> <span className='text-gray-500'>@amagedon</span></h4>
        <p >This is a test tweet. It is very long and descriptive.</p>
        <ul className='flex flex-nowrap justify-between mt-3'>
            <li><FontAwesomeIcon icon={faComment} /></li>
            <li><FontAwesomeIcon icon={faRetweet} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faChartSimple} /></li>
            <li><FontAwesomeIcon icon={faBookmark} /></li>
            <li><FontAwesomeIcon icon={faShareNodes} /></li>
        </ul>
      </div>
      <div className='border-t-2 border-gray p-5'>
        <h4 className='mb-3'><span className='font-bold'>Xavier</span> <span className='text-gray-500'>@thexav</span></h4>
        <p>This is another test tweet. It is very long and descriptive. The second tweet actually.</p>
        <ul className='flex flex-nowrap justify-between mt-3'>
            <li><FontAwesomeIcon icon={faComment} /></li>
            <li><FontAwesomeIcon icon={faRetweet} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faChartSimple} /></li>
            <li><FontAwesomeIcon icon={faBookmark} /></li>
            <li><FontAwesomeIcon icon={faShareNodes} /></li>
        </ul>
      </div >
      <div className='border-t-2 border-gray p-5'>
        <h4 className='mb-3'><span className='font-bold'>Amagedon</span> <span className='text-gray-500'>@amagedon</span></h4>
        <p>This is also a test tweet. It is very long and descriptive. This is the third tweet on the timeline</p>
        <ul className='flex flex-nowrap justify-between mt-3'>
            <li><FontAwesomeIcon icon={faComment} /></li>
            <li><FontAwesomeIcon icon={faRetweet} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faChartSimple} /></li>
            <li><FontAwesomeIcon icon={faBookmark} /></li>
            <li><FontAwesomeIcon icon={faShareNodes} /></li>
        </ul>
      </div>
    </div>
  )
}

export default Timeline
