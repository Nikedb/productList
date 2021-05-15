import { combineReducers } from 'redux';

import ProductReducer from '../../library/common/reducers/ProductReducer';

export default combineReducers({
  productReducer: ProductReducer,
});
