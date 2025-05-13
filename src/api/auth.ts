import axios from 'axios';

const registerUser = async () => {
    const response = await axios.post('http://localhost:4000/singup', {
        email: 'user@email.com',
        password: 'password'
    });
    return response.data;
}