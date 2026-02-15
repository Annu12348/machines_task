import * as employeeServices from "../services/employee.service.js"

export const employeeCreateController = async (req, res) => {
    try {
        const { name, email, phone, department, status } = req.body;

        const employee = await employeeServices.employeeCreate({
            name, email, phone, department, status
        })

        res.status(201).json({
            message: "Employee successfully created",
            result: employee
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message
        })
    }
}

export const employeeUpdateController = async (req, res) => {
    try {
        const employeeId = req.params.id
        const { name, email, phone, department, status } = req.body;

        const update = await employeeServices.employeeUpdate(employeeId, {
            name, email, phone, department, status
        })

        res.status(200).json({
            message: "Employee successfully updated",
            result: update
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message
        })
    }
}

export const employeeSingleReadController = async (req, res) => {
    try {
        const employeeId = req.params.id

        const employee = await employeeServices.employeeReadById(employeeId)

        res.status(200).json({
            message: "Employee fetched By-Id successfully",
            result: employee
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message
        })
    }
}

export const employeeDeleteController = async (req, res) => {
    try {
        const employeeId = req.params.id

        const employee = await employeeServices.employeeDeleted(employeeId)

        res.status(200).json({
            message: "Employee deleted successfully"
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message
        })
    }
}

export const employeeAllReadController = async (req, res) => {
    try {
        const employees = await employeeServices.employeeAllRead();

        res.status(200).json({
            message: "Employees fetched successfully",
            result: employees
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message
        })
    }
}

export const employeeSearchController = async (req, res) => {
  try {
    const query = req.query.query || ""; 

    const employees = await employeeServices.employeeSearch(query);

    res.status(200).json({
      message: "Employees search results",
      result: employees,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

