import axios from "axios"

export default class EmployeesService {
  static baseUrl = "https://jsonplaceholder.typicode.com/"

  static async getAllEmployees() {
    return await axios.get(`${this.baseUrl}users`)
  }
}
