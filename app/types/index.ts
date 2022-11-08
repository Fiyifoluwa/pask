export interface TCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

export interface TCategoryItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface TCartItem extends TCategoryItem {
  quantity?: number;
}
