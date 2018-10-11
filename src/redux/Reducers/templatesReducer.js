
const defaultValue = {
  pages: [],
  displayData: {},
};

const templateReducer = (prevState = defaultValue, action) => {
  switch (action.type) {
    case 'ADD_PAGE': {
      const { pages } = prevState;
      const { templateName, pageName, data } = action.payload;
      const pageData = {
        index: pageName,
        template: templateName,
        data,
      };
      pages.append(pageData);
      return {
        ...prevState,
        pages,
      };
    }

    default: {
      return prevState;
    }
  }
};
export default templateReducer;
