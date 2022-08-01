import axios from 'axios'
import dayjs from 'dayjs'
import jwt_decode from "jwt-decode";


const baseURL = 'https://vaibhavsharma3108.pythonanywhere.com'
let authToken = localStorage.getItem("authTokens") ? JSON.stringify(localStorage.getItem("authTokens")) : null

const AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { "Authorization": "Bearer " + authToken?.access }
})

AxiosInstance.interceptors.request.use(async req => {
    if (!authToken) {
        authToken = localStorage.getItem("authTokens") ? JSON.stringify(localStorage.getItem("authTokens")) : null
        req.headers.Authorization = "Bearer " + authToken?.access
    }

    const user = jwt_decode(authToken.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

    if (!isExpired) return req

    const response = await axios.post(baseURL + "/token/refresh/", {
        "refresh": authToken.refresh
    })
    localStorage.setItem("authTokens", JSON.stringify(response.data))
    req.headers.Authorization = "Bearer " + response.data.access
    return req
})

export default AxiosInstance


// user_id