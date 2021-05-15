import { storeConstants } from '../constants/StoreConstants';
import axiosInstance from '../../../main/axios';
import { URLS } from '../constants/Urls';

export const fetchProductList = () => {
  return dispatch => {
    axiosInstance
      .get(URLS.getProductList)
      .then(({ status, data }) => {
        if (status === 200) {
        dispatch({
            type: storeConstants.PRODUCTLIST,
            payload: data,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: storeConstants.PRODUCTLIST,
          payload: [],
        });
      });
  };
};
