const initialState = {
  projects:[
    {
      id: '1',
      name: 'Nadmorskie klimaty',
      type: 'Onepage',
      maxTime: '155h',
      goalTime: '120h',
      currentTime: '20h 30min',
      logo: "https://source.unsplash.com/120x120/?sea"
    },
    {
      id: '2',
      name: 'Górskie wzgórza',
      type: 'Website',
      maxTime: '205h',
      goalTime: '180h',
      currentTime: '20h 30min',
      logo: "https://source.unsplash.com/120x120/?mountain"
    },
  ]
}

const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;