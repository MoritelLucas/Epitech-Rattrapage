export class WeatherService {

    url = 'http://api.weatherstack.com/current';
    apiKey = 'acd77d39754709fc322ea1576d2bc817';


    getWeather = (location) => this.http.get(`${this.url}?access_key=${this.apiKey}&query=${location}`);
}
