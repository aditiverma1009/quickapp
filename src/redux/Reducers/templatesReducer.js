
const defaultValue = {
  pages: [],
  displayData: {},
  allProjects: [{ projectID: 'arr' }, { projectID: 'adi' }],
};

const templateReducer = (prevState = defaultValue, action) => {
  switch (action.type) {
    case 'ADD_PAGE': {
      const { pages } = prevState;
      const {
        templateName, defaultData, thumbnail,
      } = action.payload;
      const pageData = {
        index: Date.now(),
        template: templateName,
        data: defaultData,
        thumbnail,
      };
      pages.push(pageData);
      return {
        ...prevState,
        pages,
      };
    }

    case 'ADD_PROJECT': {
      const { allProjects } = prevState;
      const projectID = action.payload;
      const projectData = {
        projectID,
      };
      allProjects.push(projectData);
      return {
        ...prevState,
        allProjects,
      };
    }

    default: {
      return prevState;
    }
  }
};
export default templateReducer;
