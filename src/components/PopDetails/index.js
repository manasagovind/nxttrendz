import {Component} from 'react'

import './index.css'

class PopDetails extends Component {
  state = {isChecked: false, isClicked: false}

  changeChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onClicking = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {total, length} = this.props
    const {isChecked, isClicked} = this.state

    return (
      <div>
        {isClicked ? (
          <h1>Your order has been placed successfully</h1>
        ) : (
          <div className="totalCont">
            <h1>Payment Methods:</h1>
            <input
              type="radio"
              name="payment"
              id="genderCard"
              value="Card"
              disabled
            />
            <label htmlFor="genderCard">Card</label>
            <input
              type="radio"
              name="payment"
              id="genderNetBanking"
              value="Net Banking"
              disabled
            />
            <label htmlFor="genderNetBanking">Net Banking</label>
            <input
              type="radio"
              name="payment"
              id="genderUPI"
              value="UPI"
              disabled
            />
            <label htmlFor="genderUPI">UPI</label>
            <input
              type="radio"
              name="payment"
              id="genderWallet"
              value="Wallet"
              disabled
            />
            <label htmlFor="genderWallet">Wallet</label>
            <input
              type="radio"
              name="payment"
              id="genderCashonDelivery"
              value="Cash on Delivery"
              onChange={this.changeChecked}
            />
            <label htmlFor="genderCashonDelivery">Cash on Delivery</label>
            <div>
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}
                /-
              </h1>
              <p className="total-items">{length} Items in cart</p>
              {isChecked ? (
                <button
                  className="checkout-button"
                  type="button"
                  onClick={this.onClicking}
                >
                  Confirm Order
                </button>
              ) : (
                <button className="checkout-button" type="button" disabled>
                  Confirm Order
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default PopDetails
