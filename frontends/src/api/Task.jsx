import instance from "../utils/axios"

export const createTask = (data) => {
    return instance.post('/task/create', data, {
        withCredentials: true
    });
};

export const allTask = () => {
    return instance.get('/task/read', {
        withCredentials: true
    });
};

export const deleteTask = (taskId) => {
    return instance.delete(`/task/delete/${taskId}`, {
        withCredentials: true
    });
};

export const updateTask = (id, data) => {
    return instance.put(`/task/update/${id}`, data, {
        withCredentials: true,
    });
};


export const readByIdTask = (id) => {
    return instance.get(`/task/read/${id}`, {
        withCredentials: true
    });
};