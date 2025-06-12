import React, { useContext } from 'react';
import { StoreContext } from '../../Context_Api/Store_Cotenx';
import "./foodInem.css";
// import { preview } from 'vite';
const foodItem = ({id,Image,name,price,description,catgory}) => {
  // const [itemplus,setitemplus]=useState(0);
  const {carditem,addtoCart ,removetoCard}=useContext(StoreContext);
  return (
    <div className='item'>
        <div className="food_item_img_container">
            <img className='food-item-image' src={Image} alt="" />
            {
              !carditem[id]
                ? <i className="fa-solid fa-plus" id='add' onClick={()=>addtoCart(id)}></i>
                :<div className='itemplus'>
                  <i onClick={()=>removetoCard(id)} className="fa-solid fa-minus"></i>
                  <p>{carditem[id]}</p>

                  <i className="fa-solid fa-plus add" onClick={()=>addtoCart(id)}></i>
                </div>
                
              
            }
        </div>
        <div className='food_item_content'>
        <h6>{name}</h6>
            <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        </div>
            
            <p className='description'>{description}</p>
            <p className="price">{price}</p>
            {/* <p className='catgory'>{catgory}</p> */}
    </div>
  )
}

export default foodItem
