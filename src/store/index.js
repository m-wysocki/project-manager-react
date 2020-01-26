import { createStore } from 'redux';
import projectsCard from 'reducers';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(projectsCard, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;