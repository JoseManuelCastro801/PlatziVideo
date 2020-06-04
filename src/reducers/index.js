const reducer = (state , action) => {
    let categories = [...state.categories]
    switch(action.type){
        case 'SET_FAVORITE':
    
            categories[2].videos = [...categories[2].videos , action.payload]
            return {...state, categories} 


        case 'DELETE_FAVORITES':

            
            categories[2].videos = [...categories[2].videos.filter(item => item.id !== action.payload)]
            
            return {...state, categories} 
        default :
            return state
    }

}

export default reducer;