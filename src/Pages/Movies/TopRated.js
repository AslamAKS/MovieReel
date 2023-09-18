import React from 'react'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
import { TOP_RATED } from '../../URLs'
function TopRated() {
  return (
    <div>
      <CardWithoutScroll title="Top Rated" url={TOP_RATED}/>
    </div>
  )
}

export default TopRated