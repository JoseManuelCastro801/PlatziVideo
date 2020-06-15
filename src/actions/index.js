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

export const logOutRequest = payload => (
    {
        type : 'LOGOUT_REQUEST',
        payload
    }
)

export const register = payload => (
    {
        type : 'REGISTER',
        payload
    }
)
