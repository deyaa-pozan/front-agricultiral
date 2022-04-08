import axios from "../../api/axios";

const GET_ALL_SENSORS = "/api/getAllSensors";
const ADD_SENSOR = "/api/createSensor";
const DELETE_SENSOR = "/api/deleteSensor";

export const getSensors = async () => {
  const response = await axios.get(GET_ALL_SENSORS);

  return response.data.message;
};

export const addSensor = async (body) => {
  const response = await axios.post(ADD_SENSOR, body, {
    headers: { "Content-Type": "application/json" },
  });

  return response;
};

export const deleteSensor = async (sensorId) => {
    const response = await axios.delete(DELETE_SENSOR+`?PK=sensor&SK=${sensorId}`);
    
    return response;
  };