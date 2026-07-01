import API from "./axiosInstance";

export const getDepartments = async () => {
  try {
    const response = await API.get("/departments");

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDepartmentByID = async (deptID) => {
  try {
    const response = await API.get(`/departments/${deptID}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
