import {
  FETCH_SPORTS_BEGIN,
  FETCH_SPORTS_FAILURE,
  FETCH_SPORTS_SUCCESS,
  UPDATE_SPORT,
  CREATE_SPORT,
} from "../actionTypes";

const initialState = {
  sports: [],
  loading: false,
  error: null,
};

export const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        sports: action.payload,
      };
    case FETCH_SPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        sports: [],
      };
    case UPDATE_SPORT:
      return {
        ...state,
        loading: false,
        sports: state.sports
          .map((sport) => {
            if (sport.id === action.payload.id) {
              return {
                ...sport,
                ...action.payload,
              };
            }
            return sport;
          })
          .sort((a, b) => a.name.localeCompare(b.name)),
      };
    case CREATE_SPORT:
      return {
        ...state,
        loading: false,
        sports: [...state.sports, action.payload].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };

    default:
      return state;
  }
};
