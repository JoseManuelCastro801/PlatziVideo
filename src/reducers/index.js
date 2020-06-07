const reducer = (state, action) => {
  let categories = [...state.categories];
  let idVideo = [];

  const existe = () => {
    if (categories[2].videos.length > 0) {
      categories[2].videos.map((items) => {
        idVideo.push(items.id);
      });
      return idVideo.includes(action.payload.id);
    } else {
      return false;
    }
  };

  switch (action.type) {
    case "SET_FAVORITE": {
      console.log(`el video existe ? ${existe()}`);
      if (existe()) {
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

    default:
      return state;
  }
};

export default reducer;
