
const defaultValue = {
  userName: 'user1',
  password: 'pass1',
};

const loginReducer = (prevState = defaultValue, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { userName, password } = action.payload;
      const newState = {
        userName,
        password,
      };
      return newState;
    default:
      return prevState;
  }
};

export default loginReducer;
