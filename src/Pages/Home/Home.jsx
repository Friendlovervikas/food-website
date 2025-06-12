// import React from 'react'
import { useState } from "react"
import ExploreMenu from "../../Components/ExploreMenu/ExplorItem"
import Food_Display from "../../Components/Food Display/fooddisplay"
import Footer from "../../Components/Footer/Footer"
import { default as Header } from "../../Components/Header/Header"
import "./Home.css"

const Home = () => {
    const [catgory,setCatgory]=useState("All")
  return (
   <>
    <div>
        <Header></Header>
        <ExploreMenu catgory={catgory} setCatgory={setCatgory}></ExploreMenu>
        <Food_Display catgory={catgory}></Food_Display><br />
       <div>
        <Footer></Footer>
      </div>
    </div>
    
   </>
  )
}

export default Home
