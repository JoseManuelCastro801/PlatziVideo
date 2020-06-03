const reducer = (state , action) => {
    
    switch(action.type){
        case 'SET_FAVORITE':
            
            let categories = [...state.categories]
            categories[2].videos = [...categories[2].videos , action.payload]
            return {...state, categories} 
            
        default :
            return state
    }

}

export default reducer;