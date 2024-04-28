import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import CartContext from '../../context/CartContext'
import PopDetails from '../PopDetails'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              modal
              trigger={
                <button className="checkout-button d-sm-none" type="button">
                  Checkout
                </button>
              }
            >
              <PopDetails total={total} length={cartList.length} />
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
