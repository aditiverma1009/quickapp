
const defaultValue = {
  userName: 'test3',
  password: '987',
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
