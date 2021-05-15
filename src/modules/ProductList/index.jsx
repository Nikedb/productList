import React from 'react';
import './products.scss';

const ProductList = ({ products, getAddToCartData, carts }) => {

  const addToCart = (item) => {
    const newArray = [...carts, item];
    getAddToCartData(newArray);
  };
  return (
    <div>
      <div className='row'>
        {products && products?.map((item, i) =>
          <div key={i} className='col-md-6 col-lg-4'>
            <div className='cards'>
              <span className='imageWrapper'>
                <img src={item.image}
                     alt=''/>
              </span>
              <div className='text-content'>
                <div title={item.title} className='title'>{item.title}</div>
                <div>{item.category}</div>
                <div><i className='fa fa-dollar'/> {item.price}</div>
              </div>
              <div className='btn-danger btn-primary addtocart' onClick={() => addToCart(item)}>
                <i className='fa fa-cart-plus'/> Add To Cart
              </div>
            </div>
          </div>,
        )}
      </div>
    </div>
  );
};
export default ProductList;
