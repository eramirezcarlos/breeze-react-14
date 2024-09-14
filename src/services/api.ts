import axios, { AxiosResponse } from 'axios'
import ApiResponse from '../types/apiTypes'

const API_BASE_URL = 'http://localhost:8000/api'

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const fetchSomeData = async (): Promise<ApiResponse> => {
    try {
        const response: AxiosResponse<ApiResponse> = await api.get('/users')
        return response.data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

// export const createUser = async (userData: any): Promise<ApiResponse> => {
//     try {
//         const response: AxiosResponse<ApiResponse> = await api.post(
//             '/users',
//             userData,
//         )
//         return response.data
//     } catch (error) {
//         throw new Error('Error creating user')
//     }
// }

// You can define more functions for other API endpoints similarly
