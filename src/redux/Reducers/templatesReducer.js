
const defaultValue = {
  pages: [],
  displayData: {},
};

const templateReducer = (prevState = defaultValue, action) => {
  switch (action.type) {
    case 'ADD_PAGE': {
      const { pages } = prevState;
      const {
        templateName, pageName, defaultData, thumbnail,
      } = action.payload;
      const pageData = {
        index: pageName,
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

    default: {
      return prevState;
    }
  }
};
export default templateReducer;
