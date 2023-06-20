import axios from "axios";

const URL = 'http://localhost:3030/';

const useLeagues = () => {
    const fetchLeagues = async () => {
        try {
            const response = await axios.get(`${URL}leagues`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        fetchLeagues
    };

};

export default useLeagues;