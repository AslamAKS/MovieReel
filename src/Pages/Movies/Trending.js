import React from 'react'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
import { TRENDING } from '../../URLs'
function Trending() {
  return (
    <div>
        <CardWithoutScroll title="Trending" url={TRENDING}/>
    </div>
  )
}

export default Trending