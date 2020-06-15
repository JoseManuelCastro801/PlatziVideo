const reducer = (state, action) => {
  let categories = [...state.categories];

  switch (action.type) {
    case "SET_FAVORITE": {
        
      if (categories[2].videos.filter(item => item.id === action.payload.id).length > 0) {
        return { ...state };
      } else {
        categories[2].videos = [...categories[2].videos, action.payload];
        return { ...state, categories };
      }
    }

    case "DELETE_FAVORITES":
      categories[2].videos = [
        ...categories[2].videos.filter((item) => item.id !== action.payload),
      ];

      return { ...state, categories };

    case "LOGIN_REQUEST":
      categories[0].nombre =  action.payload.email
      return {...state , categories}

    case "LOGOUT_REQUEST":
      categories[0].nombre = action.payload
      return{...state , categories}

    default:
      return state;
  }
};

export default reducer;
