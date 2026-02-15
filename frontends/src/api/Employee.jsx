import instance from "../utils/axios"

export const createEmployee = (data) => {
    return instance.post('/employee/create', data, {
        withCredentials: true
    });
};

export const allEmployee = () => {
    return instance.get('/employee/read', {
        withCredentials: true
    });
};


export const updateEmployee = (data) => {
    return instance.put(`/employee/update/${data._id}`, data, {
        withCredentials: true
    });
};

export const deleteEmployee = (employeeId) => {
    return instance.delete(`/employee/delete/${employeeId}`, {
        withCredentials: true
    });
};

export const searchEmployee = (query) => {
    return instance.get(`/employee/search`, {
        params: { query },
        withCredentials: true
    });
};

export const singleEmployee = (employeeId) => {
    return instance.get(`/employee/${employeeId}`, {
        withCredentials: true
    });
};

