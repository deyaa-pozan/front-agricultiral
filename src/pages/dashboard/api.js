import axios from "../../api/axios";

const ANALYSIS_DASHBOARD = "/api/dashboard";


export const getAnalysis = async () => {
  const response = await axios.get(ANALYSIS_DASHBOARD);

  return response.data.message;
};