import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor() { }

  getCovidData(): Promise<any> {
    return axios.get('https://data.covid19india.org/v4/min/data.min.json')
      .then(response => {
        console.log('Service Data:', response.data); // Debugging line
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching data', error);
        throw error;
      });
  }
}
