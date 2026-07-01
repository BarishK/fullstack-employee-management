import axios from "axios";

export const getDepartments = async () => {
  try {
    const response = await axios.get("http://localhost:5001/departments");

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDepartmentByID = async (deptID) => {
  try {
    const response = await axios.get(
      `http://localhost:5001/departments/${deptID}`,
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
