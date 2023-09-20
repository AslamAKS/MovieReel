import React from 'react'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
import { TODAY_TRENDING } from '../../URLs'
import Head from '../../Components/Head/Head'
function TodayTrending() {
  return (
    <div>
      <Head/>
        <CardWithoutScroll title="Today Trending" url={TODAY_TRENDING}/>
    </div>
  )
}

export default TodayTrending