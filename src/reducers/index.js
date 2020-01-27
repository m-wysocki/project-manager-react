const initialState = {
  projects:[
    {
      id: '1',
      name: 'Nadmorskie klimaty',
      type: 'Onepage',
      maxTime: 155,
      goalTime: 120,
      currentTime: '20h 30min',
      logo: "https://source.unsplash.com/120x120/?sea"
    },
    {
      id: '2',
      name: 'Górskie wzgórza',
      type: 'Website',
      maxTime: 205,
      goalTime: 180,
      currentTime: '20h 30min',
      logo: "https://source.unsplash.com/120x120/?mountain"
    },
  ],
  users:[
    {
      id: '1',
      name: 'Admin',
      email: 'admin@admin.com',
      avatar: 'https://source.unsplash.com/240x240/?admin'
    },
    {
      id: '2',
      name: 'User',
      email: 'user@user.com',
      avatar: 'https://source.unsplash.com/240x240/?user'
    }
  ],
  tasks:[
    {
      id: '1',
      name: 'add new feature',
      projectID: '2',
      userID: '1',
      taskTime: '03:30'
    },
    {
      id: '2',
      name: 'update function',
      projectID: '1',
      userID: '2',
      taskTime: '02:00'
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_ITEM'):
      return {
        ...state,
        [action.payload.itemType]:[
          ...state[action.payload.itemType],
          action.payload.item
        ],
      };
    case ('REMOVE_ITEM'):
      return {
        ...state,
        [action.payload.itemType]:[
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ]
      };
    default:
        return state;
  }
};

export default rootReducer;