import { storeConstants } from '../constants/StoreConstants';

const initialState = {
  productList: [],
};

const ProductReducer = (state = initialState, action) => {
  if (action.type === storeConstants.PRODUCTLIST) {
    return {
      ...state,
      productList: action.payload,
    };
  } else {
    return state;
  }
};

export default ProductReducer;
