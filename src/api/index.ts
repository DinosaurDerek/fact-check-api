import { fetchGoogleFactChecks } from './googleFactCheck/fetch.js';

export async function fetchFacts(query: string) {
  try {
    const googleResults = await fetchGoogleFactChecks(query);

    // TODO: add other API fetches here

    const combinedResults = [...googleResults];

    return combinedResults;
  } catch (error) {
    console.error('Error fetching data from APIs:', error);
    return [];
  }
}
