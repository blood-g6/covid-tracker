import axios from 'axios';
import { CountryData, DailyStatisticalData, StatisticalData } from '../Types/covidTypes';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchStatisticalData = async (country: string): Promise<StatisticalData> => {
  let eachCountryUrl = baseUrl as string;
  if (country) {
    eachCountryUrl = `${baseUrl}/countries/${country}`;
  }

  try {
    const { data } = await axios.get<StatisticalData>(eachCountryUrl);

    return data;
  } catch (error) {
    console.log('failed fetch statisticalData' + error);
    return {} as StatisticalData;
  }
};

export const fetchDailyData = async (): Promise<DailyStatisticalData[]> => {
  try {
    const { data } = await axios.get<DailyStatisticalData[]>(`${baseUrl}/daily`);
    return data;
  } catch (error) {
    console.log('failed fetch dailyData' + error);
    return [];
  }
};

export const fetchCountries = async (): Promise<CountryData> => {
  try {
    const { data } = await axios.get<CountryData>(`${baseUrl}/countries`);
    return data;
  } catch (error) {
    console.log('failed fetch countryData' + error);
    return {} as CountryData;
  }
};
