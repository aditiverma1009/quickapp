export const addPage = pageDetails => ({
  type: 'ADD_PAGE',
  payload: pageDetails,
});

export const login = (userName, password) => ({
  type: 'LOGIN',
  payload: {
    userName,
    password,
  },
});
