# Misinformation Aggregator API (Prototype)

## Overview

This project was an attempt to aggregate fact-checking data, but I paused development due to the lack of readily available APIs providing structured, useful misinformation data. While the architecture supports multiple sources, existing APIs didn’t meet the needs for a scalable solution. The repo remains as a structured example of how multiple fact-checking APIs could be integrated.

## Tech Stack

- **Backend:** Fastify (Node.js)
- **API Integration:** Axios for fetching external API data
- **Schema Validation:** TypeBox
- **Deployment Plan:** Railway (not deployed)

## Structure

The project is structured to support multiple fact-checking APIs, with each source having its own module for fetching and processing data. The initial implementation focused on integrating Google's Fact Check API, with plans to expand to additional sources.

## Why Development Stopped

After exploring available fact-checking APIs, it became clear that:

- There are very few accessible fact-checking APIs, and the ones that do exist lack comprehensive data.
- Some services prohibit API use for misinformation detection.
- The availability and quality of claim reviews were inconsistent.

Given these challenges, I decided to pause development.

## Future Potential

Although the project is on hold, the structure demonstrates how multiple APIs can be integrated into a single data pipeline. If I revisit this in the future, potential improvements could include:

- Expanding to AI-powered misinformation detection instead of relying solely on fact-check APIs.
- Exploring partnerships with organizations providing misinformation-related data.
- Applying the API architecture to a different aggregation problem beyond misinformation.

## How to Run

1. Clone the repo
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with the following variable:
   ```sh
   GOOGLE_FACT_CHECK_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## Notes

This is a prototype and not a production-ready application.
