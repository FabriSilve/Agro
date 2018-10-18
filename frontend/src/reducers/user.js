const initialState = {
  username: '',
  number: 0,
}

const user = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_USERNAME':
      return {
        ...state,
        username: action.username,
      }
    case 'UDPATE_NUMBER': {
      console.log('reducer');
      return {
        ...state,
        number: action.number,
      }
    }
    default:
      return state;
  }
};

export default user;
