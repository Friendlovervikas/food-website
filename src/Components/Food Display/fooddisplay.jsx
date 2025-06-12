import React, { useContext } from 'react'
import { StoreContext } from '../../Context_Api/Store_Cotenx'
import Food_item from "../Food Item/foodItem"
import "./fooddisplay.css"
const fooddisplay = ({catgory}) => {
    const {food_list}=useContext(StoreContext)
    
  return (
    <div className='food-display' id='food-diplay'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(catgory=="All" || catgory===item.catgory){
                        return (
                            <Food_item key={index} id={item.id} name={item.name} description={item.description} price={item.price} catgory={item.catgory} Image={item.Image}></Food_item>
                        )
                    
                }
            })}
        </div>
    </div>
  )
}

export default fooddisplay
