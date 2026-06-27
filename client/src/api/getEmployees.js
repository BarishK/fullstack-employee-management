import axios from "axios";

export const getEmployees = async () => {
  try {
    const response = await axios.get("http://localhost:5001/employees");

    return response.data;
  } catch (error) {
    console.error("Veri cekilemedi!", error);
    throw error;
  }
};
