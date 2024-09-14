import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import ApiResponse from '../types/apiTypes'

const API_BASE_URL = 'http://localhost:8000/api/'

class ApiService {
    private readonly instance: AxiosInstance

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        this.initializeRequestInterceptor()
        this.initializeResponseInterceptor()
        this.initializeErrorInterceptor()
    }

    private initializeRequestInterceptor() {
        this.instance.interceptors.request.use(
            config => {
                // You can modify request config here if needed
                return config
            },
            error => {
                return Promise.reject(error)
            },
        )
    }

    private initializeResponseInterceptor() {
        this.instance.interceptors.response.use(
            (response: AxiosResponse<ApiResponse>) => {
                // You can modify response data here if needed
                return response.data
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            },
        )
    }

    private initializeErrorInterceptor() {
        this.instance.interceptors.response.use(
            undefined,
            (error: AxiosError) => {
                // Handle error responses globally
                if (error.response) {
                    // Handle HTTP error responses
                    // console.error(
                    //     'HTTP error:',
                    //     error.response.status,
                    //     error.response.data,
                    // )
                } else if (error.request) {
                    // Handle network errors
                    // console.error('Network error:', error.request)
                } else {
                    // Handle other errors
                    // console.error('Error:', error.message)
                }
                return Promise.reject(error)
            },
        )
    }

    public async fetchData<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.get(url)
            return response.data
        } catch (error) {
            throw new Error('Error fetching data')
        }
    }

    // Add more methods for other types of requests (POST, PUT, DELETE, etc.)
}

const apiServiceInstance = new ApiService(API_BASE_URL)

export default apiServiceInstance
