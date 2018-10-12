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

export const addProject = newProject => ({
  type: 'ADD_PROJECT',
  payload: newProject,
});
