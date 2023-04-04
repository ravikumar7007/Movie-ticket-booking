import React, { useLayoutEffect } from 'react'
import { Navbar } from '../Navbar/Navbar'
import Banner from './Banner/Banner'
import Searchpanel from './Searchpanel/Searchpanel'
import styles from './Homepage.module.css'
import MoviesCard from './MoviesCard/MoviesCard'
import Footer from '../Footer/Footer'

export default function Homepage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div>
      <div>
        <Navbar />
        <Banner />
        </div> 
    <Searchpanel />
    
    <div className={styles.searchfiller}>
   
    </div>
    <div >
    <MoviesCard />
    </div>
    <div className={styles.searchfiller}>
   
   </div>
   <Footer />
    </div>
  )
}
