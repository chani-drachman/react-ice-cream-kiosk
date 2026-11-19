import React from 'react'
import styles from '../cssComponents/OrderSummary.module.css'

const OrderSummary = ({flavors, scoopLimit}) => {
    const totalScoops = flavors.reduce((total, flavor) => {
  return total + flavor.scoopsSelected
}, 0)
  return (
    <div className={styles.orderSummaryDiv}>
        {(totalScoops>=scoopLimit) && <span>You reached your scoop limit</span>}
        <h3>Order Summary</h3>
<h4>Total scoops: {totalScoops}</h4>
<h5>Total price: {totalScoops*5}$</h5>
    </div>
  )
}

export default OrderSummary