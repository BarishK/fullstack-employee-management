import axios from "axios";

export const getSalaries = async () => {
  try {
    const response = await axios.get("http://localhost:5001/salary");

    return response.data;
  } catch (error) {
    console.error("Veri cekilemedi", error);
    throw error;
  }
};
