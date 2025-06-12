import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context_Api/Store_Cotenx';
const Cart = () => {
  const { carditem, food_list, addtoCart, removetoCard } = useContext(StoreContext);
  const cutelement=()=>{
    carditem(false)
  }
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr />
        {food_list.map((item, index) => {
          if (carditem[item.id] > 0) {
            return (
              <>
              <div className="div">
              <div key={index} className="cart-item-title card-item-items">
                  <img src={item.Image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{carditem[item.id]}</p>
                  <p>${item.price * carditem[item.id]}</p>
                  <p onClick={()=>{removetoCard(item.id)}} className='cross'>x</p>
                </div>
                <hr />
              </div>

              {/* <hr /> */}
              </>
            )
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>Cart Total</h2>
          <div className="noth">
            <div className="cart_total_details">
              <p>SubTotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Free</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>{0}</b>
            </div>
            <hr />
            
          </div>
          <button>Checkout Now</button>
        </div>
        <div className="cart_promo_cord">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="card_promocord">
              <input type="text" placeholder='Enter promoCode' />
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
