import axios from 'axios';

export const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products'); // time taking
    return response.data;
}