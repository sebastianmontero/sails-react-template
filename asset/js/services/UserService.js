import axios from 'axios';


class UserService {
    static async signin(credentials) {
        try {
            const response = await axios.post('/api/user/signin', credentials);
            return response.data;
        } catch (error) {
            throw error.response;
        }
    }
}

export default UserService;
