import axios from "axios";
import api from "./axios";

export const getFamilyTree = async() => {
    const response = await api.get("/family/family-tree");
    return response.data;
}

