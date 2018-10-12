
const defaultValue = {
  pages: [],
  displayData: {},
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

    default: {
      return prevState;
    }
  }
};
export default templateReducer;
