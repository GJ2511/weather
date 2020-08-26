import { WEATHER_URL, API_KEY } from './constant';

class WeatherService {
    async getWeather(params = {}) {
        let url = `${WEATHER_URL}?APPID=${API_KEY}&`;

        for (const param in params) {
            url += `${param}=${params[param]}&`;
        }

        const response = await fetch(url);
        const result = await response.json();

        return result;
    }
}

export default new WeatherService();
