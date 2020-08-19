import { WEATHER_URL } from './constant';
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
};

class WeatherService {
    async getWeather(params = {}) {
        let url = `${WEATHER_URL}?`;

        for (const param in params) {
            url += `${param}=${params[param]}&`;
        }

        const response = await fetch(url, { headers });
        const result = await response.json();

        return result;
    }
}

export default new WeatherService();
