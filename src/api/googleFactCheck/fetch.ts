import axios from 'axios';
import { GoogleFactCheckResponse } from './types.js';

const GOOGLE_FACT_CHECK_API =
  'https://factchecktools.googleapis.com/v1alpha1/claims:search';

export async function fetchGoogleFactChecks(query: string) {
  try {
    const response = await axios.get<GoogleFactCheckResponse>(
      GOOGLE_FACT_CHECK_API,
      {
        params: {
          query,
          key: process.env.GOOGLE_FACT_CHECK_API_KEY,
          languageCode: 'en',
        },
      }
    );

    const claimResults = response.data.claims || [];
    const filteredResults = claimResults.filter(
      result => result.claimReview && result.claimReview.length > 0
    );

    return filteredResults;
  } catch (error) {
    console.error('Error fetching fact-check data:', error);
    return [];
  }
}
