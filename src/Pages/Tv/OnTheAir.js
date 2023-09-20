import React from 'react'
import CardWithoutScroll from '../../Components/Cards/CardWithoutScroll'
import { ON_THE_AIR } from '../../URLs'
import HeadForList from '../../Components/Head/HeadForList'
import Footer from '../../Components/Footer/Footer'
function OnTheAir() {
  return (
    <div>
        <HeadForList />
        <CardWithoutScroll title="On The Air" url={ON_THE_AIR} />
        <Footer />
    </div>
  )
}

export default OnTheAir