export type StatisticalData = {
  confirmed: { value: number };
  recovered: { value: number };
  deaths: { value: number };
  lastUpdate?: Date;
  country?: string;
};

export type DailyStatisticalData = {
  confirmed: { total: number };
  deaths: { total: number };
  reportDate: string;
};

export type CountryData = {
  countries: [{ name: string }];
};
