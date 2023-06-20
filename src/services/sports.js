import axios from "axios";

const URL = "http://localhost:3030/";

export const fetchSports = async () => {
  try {
    const response = await axios.get(`${URL}sports`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSport = async (sport) => {
  try {
    const response = await axios.put(`${URL}sports/${sport.id}`, sport);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createSport = async (sport) => {
  try {
    const response = await axios.post(`${URL}sports`, sport);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
