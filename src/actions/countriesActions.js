import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY,
  CREATE_COUNTRY,
} from "../actionTypes";

import {
  fetchCountries,
  createCountry,
  updateCountry,
} from "../services/countries";

export const getCountries = () => async (dispatch) => {
      dispatch({
    type: FETCH_COUNTRIES_BEGIN,
  });
  try {
    const response = await fetchCountries();
    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      payload: error.message,
    });
  }
}
