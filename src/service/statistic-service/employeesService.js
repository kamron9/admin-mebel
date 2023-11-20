import axios from "axios"

export default class EmployeesService {
  static baseUrl = "http://localhost:5500/api/"

  static async getAllEmployees() {
    return await axios.get(`${this.baseUrl}employees/`)
  }
  static async create(employeeData) {
    try {
      return await axios.post(`${this.baseUrl}/employees`, {
        fullName: employeeData.fullName,
        birthday: employeeData.birthday,
        email: employeeData.email,
        phone: employeeData.phone,
        role: employeeData.role,
        additional: employeeData.additional,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
