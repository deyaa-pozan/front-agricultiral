import axios from "../../api/axios";

const GET_ALL_SENSORS = "/api/getAllUsers";
const ADD_SENSOR = "/api/createUser";
const DELETE_SENSOR = "/api/deleteUser";
const ADD_NODE_FOR_USER = "/api/addNodeforUser";

export const getUsers = async () => {
  const response = await axios.get(GET_ALL_SENSORS);

  return response.data.message;
};

export const addUser = async (body) => {
  const response = await axios.post(ADD_SENSOR, body, {
    headers: { "Content-Type": "application/json" },
  });

  return response;
};

export const deleteUser = async (userId) => {
    const response = await axios.delete(DELETE_SENSOR+`?PK=user&SK=${userId}`);
    
    return response;
  };

  export const addNodeforUser = async (body) => {
    const response = await axios.put(ADD_NODE_FOR_USER, body, {
      headers: { "Content-Type": "application/json" },
    });
    
    return response;
  };