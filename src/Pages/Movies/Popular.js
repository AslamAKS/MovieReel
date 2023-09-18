import React from 'react'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
import { POPULAR } from '../../URLs'
function Popular() {
  return (
    <div>
        <CardWithoutScroll title="Popular" url={POPULAR}/>
    </div>
  )
}

export default Popular