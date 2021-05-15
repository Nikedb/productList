import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../library/common/actions/ProductActions';
import Header from '../../library/common/component/Header/Header';
import PageLoader from '../../library/common/component/PageLoader';
import { Pagination } from '../../library/common/component/Pagination/PaginationList';
import ProductList from '../ProductList';
import Filter from './Filter';
import CartItem from '../CartItem';

const Home = () => {
  const [carts, setCartData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      // common APi call
      await dispatch(fetchProductList());
      setIsLoading(false);
    })();
  }, [dispatch]);

  const productApiData = useSelector(state => state?.productReducer?.productList);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productApiData?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
  };

  const setFilterPage = (value) => {
    let filteredItems = [currentPosts];
    filteredItems = currentPosts?.filter(item => (item?.title + item?.category)?.toLowerCase().includes((value?.name + value?.category)?.toLowerCase()));
    setProductList(filteredItems);
  };

  const getAddToCartData = (carts) => {
    setCartData(carts);
  };

  useEffect(() => {
    setProductList(productList);
  }, [productList]);

  useEffect(() => {
    setCartData(carts);
  }, [carts]);

  return (
    <div>
      {/*header Component*/}
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 mt-4'>
            {loading && <PageLoader/>}
            <h1>Product List</h1>
            {/*filter Component*/}
            <Filter currentPosts={currentPosts} setFilterPage={setFilterPage}/>

            {/*Product List component*/}
            <ProductList getAddToCartData={getAddToCartData} carts={carts} products={productList}/>

            {/*Pagination component*/}
            <Pagination
              totalPosts={productApiData?.length}
              postsPerPage={postsPerPage}
              paginate={paginate}
              showLast={true}
              showFirst={true}
              showIndex={true}/>
          </div>


          <div className='col-sm-4 mt-4'>
            {/*Pagination component*/}
            {carts && carts.length > 0 &&
            <CartItem deletedCartValue={getAddToCartData} carts={carts}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
