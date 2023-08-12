import React from 'react'

import Banner from './banner/Banner'
import Searchbar from './search/Searchbar'
import Brand from './brand/Brand'
import Trending from './trending/Trending'
import NewList from './newlist/NewList'


function Home() {
    return (
    
        <div>
            
            <Banner></Banner>
            <Searchbar></Searchbar>
            <Brand></Brand>
            <Trending></Trending>
            <NewList></NewList>
        </div>
       
    )
}

export default Home
