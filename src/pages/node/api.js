import axios from "../../api/axios";

const GET_ALL_NODES = "/api/getAllNodes";
const ADD_NODE = "/api/createNode";
const DELETE_NODE = "/api/deleteNode";
const ADD_SENSOR_FOR_NODE = "/api/addSensorforNode";
const BETWEEN_TWO_DATES = "/api/getReadingsBetweenTwoDates";

export const getAllNodes = async () => {
  const response = await axios.get(GET_ALL_NODES);

  return response.data.message;
};

export const addNode = async (body) => {
  const response = await axios.post(ADD_NODE, body, {
    headers: { "Content-Type": "application/json" },
  });

  return response;
};

export const deleteNode = async (nodeId) => {
    const response = await axios.delete(DELETE_NODE+`?PK=node&SK=${nodeId}`);
    
    return response;
  };

  export const addSensorforNode = async (body) => {
    const response = await axios.put(ADD_SENSOR_FOR_NODE, body, {
      headers: { "Content-Type": "application/json" },
    });
    
    return response;
  };

  export const getReadingsBetweenTwoDates = async (nodeId,body) => {
    body = {
      from :body[0]?.startDate,
      to:body[0]?.endDate
    }
console.log(body);
    const response = await axios.post(BETWEEN_TWO_DATES+"/"+nodeId, body, {
      headers: { "Content-Type": "application/json" },
    });
    return response?.data?.message;
  };