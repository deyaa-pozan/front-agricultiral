import axios from "../../api/axios";

const GET_ALL_NODES = "/api/getAllNodes";
const ADD_NODE = "/api/createNode";
const DELETE_NODE = "/api/deleteNode";
const ADD_SENSOR_FOR_NODE = "/api/addSensorforNode";

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