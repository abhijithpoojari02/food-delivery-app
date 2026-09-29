import React, { useState, useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { StoreContext } from '../../components/context/StoreContext'

const Home = () => {

  const [category, setCategory] = useState('All')
  const { search } = useContext(StoreContext)

  return (
    <div>
      {!search && <Header/>}
      {!search && <ExploreMenu category={category} setCategory={setCategory}/>}
      <FoodDisplay category={category}/>
      {!search && <AppDownload/>}
    </div>
  )
}

export default Home