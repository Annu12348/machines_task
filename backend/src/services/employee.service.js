import employeeModel from "../models/employee.model.js"

export const employeeCreate = async ({ name, email, phone, department, status }) => {
    email = email.trim().toLowerCase()

    const existsEmployee = await employeeModel.findOne({ email })

    if (existsEmployee) {
        const error = new Error("Employee already exists with this email");
        error.statusCode = 409;
        throw error;
    }

    const employee = await employeeModel.create({
        name,
        email,
        phone,
        department,
        status
    })

    if (!employee) {
        const error = new Error("employee not created")
        error.statusCode = 400
        throw error
    }

    return employee;
}

export const employeeUpdate = async (employeeId, { name, email, phone, department, status }) => {

    if (email) {
        email = email.trim().toLowerCase();

        const emailExists = await employeeModel.findOne({ email, _id: { $ne: employeeId } });
        if (emailExists) {
            const error = new Error("Another employee already exists with this email");
            error.statusCode = 409;
            throw error;
        }
    }

    const update = await employeeModel.findByIdAndUpdate(employeeId, {
        name,
        email,
        phone,
        department,
        status
    }, {
        new: true,
        runValidators: true
    })

    if (!update) {
        const error = new Error("Employee not found or not updated");
        error.statusCode = 404;
        throw error;
    }


    return update;
}

export const employeeReadById = async (employeeId) => {
    const employee = await employeeModel.findById(employeeId);

    if (!employee) {
        const error = new Error("Employee not found");
        error.statusCode = 404;
        throw error;
    }

    return employee;
}

export const employeeDeleted = async (employeeId) => {
    const employee = await employeeModel.findById(employeeId);

    if (!employee) {
        const error = new Error("Employee not found");
        error.statusCode = 404;
        throw error;
    }

    const deletedEmployee = await employeeModel.findByIdAndDelete(employeeId);

    if (!deletedEmployee) {
        const error = new Error("Employee not found or not deleted");
        error.statusCode = 404;
        throw error;
    }

    return deletedEmployee;
}

export const employeeAllRead = async () => {
    try {
        const employees = await employeeModel.find().sort({ updatedAt: -1 }).lean();
        return employees;
    } catch (error) {
        throw new Error('Error fetching employees: ' + error.message);
    }
}

export const employeeSearch = async (query) => {
    if (!query || typeof query !== 'string' || !query.trim()) {
        return [];
    }
    const searchRegex = new RegExp(query, "i");

    let statusMatch = [];
    if (
        query.trim().toLowerCase() === 'active' ||
        query.trim().toLowerCase() === 'inactive'
    ) {
        statusMatch.push({ status: { $regex: new RegExp(`^${query.trim()}$`, 'i') } });
    }

    const employees = await employeeModel.find({
        $or: [
            { name: { $regex: searchRegex } },
            { email: { $regex: searchRegex } },
            { phone: { $regex: searchRegex } },
            { department: { $regex: searchRegex } },
            ...statusMatch,
        ],
    })
    .sort({ updatedAt: -1 })
    .lean();

    return employees;
};
