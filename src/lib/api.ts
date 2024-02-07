import Cars from '../models/cars';

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error('The API URL is not set.');
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchCars() {

    try {
        const response = await fetch(`${baseUrl}/api/cars.json`);

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }

        const cars: Cars[] = await response.json();
        return cars;

    } catch (error) {
        // Check if the error is an instance of Error.
        if (error instanceof Error) {
            // console.error('Fetch error:', error.message);
            throw new Error(`An error occurred while fetching the cars data: ${error.message}`);
        }

        // Risky to directly expose the actual error, so throw a generic error message.
        // console.error('An unexpected error occurred:', error);
        throw new Error('An unexpected error occurred.');
    }
}
