import axios from "axios"
const baseUrl = '/api/bmi'

const create = async newBMI => {
    const response = await axios.post(baseUrl, newBMI)
    return response.data
}

// eslint-disable-next-line
export default { create }