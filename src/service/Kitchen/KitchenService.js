import axios from "axios"

export default class KitchenService {
  static async getAll() {
    const allData = await axios.get("https://dummyjson.com/products")
    return allData.data
  }
}
