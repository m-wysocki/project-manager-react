import axios from 'axios';

export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
export const REMOVE_FAILURE = 'REMOVE_FAILURE';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const removeItem = (itemType, id) => (dispatch) => {
    dispatch({ type: REMOVE_REQUEST });
    return axios
        .delete(`http://localhost:9000/api/${itemType}/delete/${id}`)
        .then(() => {
            dispatch({
                type: REMOVE_SUCCESS,
                payload: {
                    itemType,
                    id
                }
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REMOVE_FAILURE });
        });
    // return {
    //     type: 'REMOVE_ITEM',
    //     payload: {
    //         itemType,
    //         id
    //     }
    // };
};

export const addItem = (itemType, itemContent) => (dispatch) => {
    dispatch({ type: ADD_REQUEST });
    return axios
        .post(`http://localhost:9000/api/${itemType}/add`, itemContent)
        .then(({ data }) => {
            console.log(itemContent);
            dispatch({
                type: ADD_SUCCESS,
                payload: {
                    itemType,
                    item: {
                        ...data
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_FAILURE });
        });
};

export const fetchItems = (itemType) => (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    return axios
        .get(`http://localhost:9000/api/${itemType}`)
        .then(({ data }) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: {
                    data,
                    itemType
                }
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE });
        });
};