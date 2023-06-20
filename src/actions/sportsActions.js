import {
  FETCH_SPORTS_BEGIN,
  FETCH_SPORTS_FAILURE,
  FETCH_SPORTS_SUCCESS,
  UPDATE_SPORT,
  CREATE_SPORT,
} from "../actionTypes";

import { fetchSports, updateSport, createSport } from "../services/sports";

export const getSports = () => async (dispatch) => {
  dispatch({
    type: FETCH_SPORTS_BEGIN,
  });
  try {
    const response = await fetchSports();
    dispatch({
      type: FETCH_SPORTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SPORTS_FAILURE,
      payload: error.message,
    });
  }
};

export const putSport = (sport) => async (dispatch) => {
  dispatch({
    type: FETCH_SPORTS_BEGIN,
  });
  try {
    await updateSport(sport);
    dispatch({
      type: UPDATE_SPORT,
      payload: sport,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SPORTS_FAILURE,
      payload: error.message,
    });
  }
};

export const postSport = (sport) => async (dispatch) => {
  dispatch({
    type: FETCH_SPORTS_BEGIN,
  });
  try {
    await createSport(sport);
    dispatch({
      type: CREATE_SPORT,
      payload: sport,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SPORTS_FAILURE,
      payload: error.message,
    });
  }
}