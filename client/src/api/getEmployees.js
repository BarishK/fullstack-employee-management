import API from "./axiosInstance";

export const getEmployees = async () => {
  try {
    const response = await API.get("/employees");

    return response.data;
  } catch (error) {
    console.error("Veri cekilemedi!", error);
    throw error;
  }
};
