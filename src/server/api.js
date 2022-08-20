import axios from "axios";

const config = {
    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJndWdhIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9QQVRJRU5UIn1dLCJpYXQiOjE2NTM3NTYzNjQsImV4cCI6MTY1NjM4NjE2NH0.7cfRM644JmER1T0_U-jZb2WDfZhkrbC0EZc5I1K1BSE" }
}

const api = axios.create({
    baseURL: 'http://192.168.0.100:8080'
})

export default api;