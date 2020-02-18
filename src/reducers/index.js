import { ADD_SUCCESS, REMOVE_SUCCESS, FETCH_SUCCESS } from '../actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
          ...state,
          [action.payload.itemType]: [...action.payload.data],
      };
    case ADD_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]:[
          ...state[action.payload.itemType],
          action.payload.item
        ],
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]:[
            // eslint-disable-next-line no-underscore-dangle
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ]
      };
    default:
        return state;
  }
};

export default rootReducer;