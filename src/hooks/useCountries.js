import axios from "axios"

const URL = 'http://localhost:3030/';

const useCountries = () => {
    const fetchCountries = async () => {
        try {
            const response = await axios.get(`${URL}countries`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const updateCountry = async (country) => {
        try {
            const response = await axios.put(`${URL}countries/${country.id}`, country);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const createCountry = async (country) => {
        try {
            const response = await axios.post(`${URL}countries`, country);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchCountries,
        updateCountry,
        createCountry
    };
};

export default useCountries;