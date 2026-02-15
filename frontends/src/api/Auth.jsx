import instance from "../utils/axios"

export const login = (data) => {
    return instance.post('/login', data, {
        withCredentials: true
    })
}
