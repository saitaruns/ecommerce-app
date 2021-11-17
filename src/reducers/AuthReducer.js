const initState = {
    isLogin: false
}

export const authActiontypes = {
    LOGIN_USER: "LOGIN_USER",
    LOGOUT_USER: "LOGOUT_USER"
}


const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case authActiontypes.LOGIN_USER:
            return {
                isLogin: true,
            }
        case authActiontypes.LOGOUT_USER:
            return {
                isLogin: false,
            }
        default:
            return state
    }
}

export default AuthReducer