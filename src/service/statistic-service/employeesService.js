import axios from "axios";


export default class EmployeesService {

    static baseUrl = 'https://jsonplaceholder.typicode.com/';
    static async getAllEmployees (){
        try {
            const response = await axios.get(`${this.baseUrl}users`)
            return await response.data
        }catch (e) {
            throw new Error(e)
        }
    }

}