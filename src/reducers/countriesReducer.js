import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY,
  CREATE_COUNTRY,
} from "../actionTypes";

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        countries: [],
      };
    default:
      return state;
  }
};
