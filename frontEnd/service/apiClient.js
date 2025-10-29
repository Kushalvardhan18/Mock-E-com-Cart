class ApiClient {
    constructor() {
        this.baseURL = "https://ecom-backend-mu-orpin.vercel.app/api"
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    async customFetch(endpoint, options = {}) {
        try {
            const url = `${this.baseURL}${endpoint}`
            const headers = { ...this.defaultHeaders, ...options.headers }
            const config = {
                ...options,
                headers
            }
            console.log(`Fetching ${url}`);

            const res = await fetch(url, config)
            const data = await res.json()
            return data

        } catch (error) {
            console.error('API Error ', error)
        }
    }

    async products(){
      return   this.customFetch("/products")
    }
}


const apiClient = new ApiClient()

export default apiClient