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
    return instance.post('/otp-send-to', data, {
        withCredentials: true
    })
}

export const otpVerify = (data) => {
    return instance.post('/otp-verify', data, {
        withCredentials: true
    })
}

export const changePassword = (data) => {
    return instance.post('/change-password', data, {
        withCredentials: true
    })
}

export const logout = () => {
   return instance.post('/logout');
}
