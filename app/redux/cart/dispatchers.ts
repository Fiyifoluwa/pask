import { instance } from 'app/services/apiServices';
import {
  handleRequestTypeActionCreators,
  setCategories,
  setCategoryItems,
} from './actions';
import { CART_ACTION_TYPES as actionTypes } from './types';

export const getCategoriesDispatcher = (params?: any) => {
  return (dispatch: any) => {
    dispatch(
      handleRequestTypeActionCreators(actionTypes.GET_MEAL_CATEGORIES_REQUEST),
    );

    return instance
      .get('categories.php', { params })
      .then(async (response: any) => {
        if (response.status === 200) {
          dispatch(setCategories(response.data.categories));
        }
        return { requestStatus: 'success' };
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};

export const getCategoryItemsDispatcher = (category: string) => {
  return (dispatch: any) => {
    dispatch(
      handleRequestTypeActionCreators(actionTypes.GET_CATEGORY_ITEM_REQUEST),
    );

    return instance
      .get(`filter.php?c=${category}`)
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log(response);

          dispatch(setCategoryItems(response.data.meals));
        }
        return { requestStatus: 'success' };
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};
