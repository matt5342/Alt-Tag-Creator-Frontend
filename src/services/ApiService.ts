import axios from 'axios';

class ApiService {

    async getJsonAsync(url: string) {
        const response = await axios.get(url);
        return response.data;
    }

    async postFormDataAsync(url: string, formData: FormData) {
        const response = await axios.post(url, formData);
        return response.data;
    }
}

export default new ApiService();
