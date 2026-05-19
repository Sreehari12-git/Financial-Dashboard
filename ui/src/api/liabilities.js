import axios from "axios";
import api from "./axios";



export const getAllLiabilities = async() => {
    const response = await api.get("/liability/all");
    return response.data
}