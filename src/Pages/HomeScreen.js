import React from 'react'
import Head from '../Components/Head/Head'
import ImageSlider from '../Components/Banner/Banner'
import Card from '../Components/Cards/Card'
import {TRENDING,UPCOMING,TOP_RATED,POPULAR} from '../URLs'
import Footer from '../Components/Footer/Footer'



function HomeScreen() {
  return (
    <div>
    <Head />
        <ImageSlider />
        <Card title='Trending' url={TRENDING}/>
        <Card title='Upcoming' url={UPCOMING} upComing/>
        <Card title='Top Rated' url={TOP_RATED}/>
        <Card title='Popular' url={POPULAR}/>
    <Footer/>
    </div>
  )
}

export default HomeScreen