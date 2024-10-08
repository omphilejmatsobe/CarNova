import { CarCardProps } from "../types";

export async function fetchCars()
{
    const headers =  {
        'x-rapidapi-key': '2e3467b4b9msh391ee3a3104ec2fp1d0668jsne5ceb7ee3f59',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{ headers: headers, });
    const result = await response.json();
    return result;
}

export const generateImageUrl = (car: CarCardProps, angle ? : string ) =>
{
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;

    url.searchParams.append('customer', 'key');

    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);

    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const CarRental = (city_mpg: number, year: number) => {
    const basePricePerDay = 500;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
