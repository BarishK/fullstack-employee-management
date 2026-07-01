import axios from "axios";
import API from "./axiosInstance";

export const getSalaries = async () => {
  try {
    const response = await API.get("/salary");

    return response.data;
  } catch (error) {
    console.error("Veri cekilemedi", error);
    throw error;
  }
};
