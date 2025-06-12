import React from 'react'
import "./ExploreItem.css"
import {menu_List} from "../../assets/assets"
const ExplorItem = ({Catgor,setCatgory,}) => {
  return (
    <div className='explore-Menu'id='explore-Menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-para'>A menu is a detailed list of options offered to the customer when they come to eat or drink at the restaurant or bar. They offer a wide variety of choices, and are priced differently based on the ingredients used, time taken to cook the dishes, or the season and availability of ingredients used.</p>
        <div className="explore-menu-list">
            {menu_List.map((item,index)=>{
                return (
                    <div onClick={()=>{setCatgory(prev=>prev===item.menu_name?"All":item.menu_name)}} className="explore-menu-item" key={index}>
                        <img className={Catgor===item.menu_name?"active":""} src={item.menu_image} alt="1" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
      
    </div>
  )
}

export default ExplorItem
