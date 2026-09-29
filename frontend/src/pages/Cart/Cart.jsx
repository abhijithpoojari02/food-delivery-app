import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url, promoCode, discount, applyPromoCode, getDiscountAmount, getDiscountedTotal } = useContext(StoreContext);
  const [promoInput, setPromoInput] = useState("");

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    const result = applyPromoCode(promoInput);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Itmes</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return <div>
              <div className="cart-items-title cart-items-item">
              <img src={url + "/images/" + item.image} alt="" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
            </div>
            <hr />
            </div>

            
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            {discount > 0 && (
              <>
                <div className="cart-total-detail">
                  <p>Discount (20%)</p>
                  <p style={{color: "green"}}>-₹{getDiscountAmount()}</p>
                </div>
                <hr />
              </>
            )}
            <div className="cart-total-detail">
              <b>Total</b>
              <b>₹{getDiscountedTotal()}</b>
            </div> 
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <form onSubmit={handlePromoSubmit} className='cart-promocode-input'>
              <input 
                type="text" 
                placeholder='Promo Code'
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
            {promoCode && (
              <p style={{color: "green", fontSize: "14px", marginTop: "10px", fontWeight: "500"}}>
                Code "{promoCode}" applied! 20% discount.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart