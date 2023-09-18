import React from 'react'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
import { UPCOMING } from '../../URLs'
function Upcoming() {
  return (
    <div>
      <CardWithoutScroll title="Upcoming" url={UPCOMING}/>
    </div>
  )
}

export default Upcoming