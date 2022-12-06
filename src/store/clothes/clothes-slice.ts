import { createSlice } from "@reduxjs/toolkit";
import {
  IClothesItem,
  IParticulars,
} from "../../components/Container-components/Clothes/Clothes.props";
import { RootState } from "../store";

// ! INTERFACE FOR ALL CLOTHES
export interface IClothes {
  isLoading: boolean;
  error: null | string;
  clothes: IProducts;
}

interface IClothesFilters {
  color: string[];
  sizes: string[];
  brand: string[];
  price: string[];
}

export interface IProducts {
  men: any[];
  women: any[];
}

export interface IObjectPlug {
  [index: string]: any;
}

export const name = "@@clothes";

export const initialState: IClothes = {
  isLoading: false,
  error: null,
  clothes: {
    women: [],
    men: [],
  },
};

export const clothesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const clothesReducer = clothesSlice.reducer;

export const selectIsLoading = (state: RootState) => state.clothes.isLoading;
export const selectError = (state: RootState) => state.clothes.error;

export const getDataByGender = (state: RootState, gender: keyof IProducts) => {
  return state.clothes.clothes[gender];
};

export const selectClothes = (state: RootState) =>
  state.clothes.clothes.men.concat(state.clothes.clothes.women);

export const selectClothesByGender = (
  state: RootState,
  gender: keyof IProducts
): IClothesItem[] => state.clothes.clothes[gender];

export const selectClothesByParticulars = (
  items: IClothesItem[],
  filter: keyof IParticulars
) => items.filter((item) => item.particulars[filter]);

export const selectClothByGenderAndId = (
  state: RootState,
  gender: keyof IProducts,
  id: string
) => {
  const ref = selectClothesByGender(state, gender);
  return ref.find((item) => item.id === id);
};
