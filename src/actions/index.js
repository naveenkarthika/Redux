export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload:num
    }
}
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const isLogged = () => {
    return {
        type: "SIGN_IN"
    }
}

export const isLoggedOut = () => {
    return {
        type: "SIGN_OUT"
    }
}