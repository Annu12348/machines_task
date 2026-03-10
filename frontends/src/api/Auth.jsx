import instance from "../utils/axios"
export const register = (data) => {
    return instance.post('/register', data, {
        withCredentials: true
    })
}
export const login = (data) => {
    return instance.post('/login', data, {
        withCredentials: true
    })
}

export const resetOtpJenerateToSend = (data) => {
    return instance.post('/forget-password', data, {
        withCredentials: true
    })
}
