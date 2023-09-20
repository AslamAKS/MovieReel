import React from 'react'
import { TOP_RATED_TV } from '../../URLs'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
function TopRatedTV() {
  return (
    <div>
        <CardWithoutScroll title="Top Rated" url={TOP_RATED_TV}/>
    </div>
  )
}

export default TopRatedTV