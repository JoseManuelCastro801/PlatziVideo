export const setFavorite = payload => (
    {
        type: 'SET_FAVORITE',
        payload
    }
)

export const deletFavorite = payload => (
    {
        type : 'DELETE_FAVORITES',
        payload

    }
)

export const LoginRequest = payload => (
    {
    type : 'LOGIN_REQUEST',
    payload
    }    
)
