import React, { useEffect, useState } from 'react';
import './products.scss';

const CartItem = ({ carts, deletedCartValue }) => {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(carts);
  }, [carts]);
  const deleteFromCart = (id) => {
    const deletedValue = [...cart];
    const deleted = deletedValue.filter(item => item.id !== id);
    deletedCartValue(deleted);
  };
  const Tax = 5;
  const discountValue = 10;
  const discount = discountValue / 100;
  const result = carts.reduce((total, currentValue) => total = (total + currentValue.price), 0);
  const withDiscountTotal = result - (result * discount).toFixed(2);
  const withTaxTotal = withDiscountTotal * ((100 + Tax) / 100);
  console.log(withDiscountTotal)
  console.log(withTaxTotal)
  return (
    <div>
      <div className="card">
        <div className="card-body cart">
          <h5 className="card-title">Add To Cart</h5>
          {cart.map((cart, i) =>
            <div className='d-flex'>
              <div className='m-2'>
                <img width='40' src={cart.image} alt={cart.image}/>
              </div>
              <div className='w-100'>
                <p className='mb-1'>{cart.title}</p>
                <p className='mb-1 fs20 space-between' onClick={() => deleteFromCart(cart.id)}>
                  <span> <i className='fa fa-dollar mr10'/>{cart.price}</span>
                  <i className='fa fa-trash-o ml-3 text-danger'/>
                </p>
              </div>
            </div>,
          )}
          <div className='row'>
            <div className='col-sm-3'>
              Tax
            </div>
            <div className='col-sm-9 text-left fs20 pl-0'>
              {Tax}%
            </div>
            <div className='col-sm-3'>
              Discount
            </div>
            <div className='col-sm-9 text-left fs20 pl-0'>{discountValue}%</div>
            <div className='col-sm-3'>
              Total
            </div>
            <div className='col-sm-9 text-left fs20 pl-0'>
              <i className='fa fa-dollar'/> {withTaxTotal.toFixed(2)}
            </div>

          </div>

          <button className='btn-success btn d-block w-100'>Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
