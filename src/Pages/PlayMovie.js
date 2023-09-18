import React from 'react'
import Play from '../Components/PlayMovie/Play'
import Card from '../Components/Cards/Card'
import { TOP_RATED,POPULAR } from '../URLs'
function PlayMovie() {
  return (
    <div>
        <Play/>
        <Card title='Top Rated' url={TOP_RATED}/>
        <Card title='Popular' url={POPULAR}/>
    </div>
  )
}

export default PlayMovie