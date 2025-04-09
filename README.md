 React Weather App

This project is a simple weather forecast application built with React. It uses the WeatherAPI to fetch real-time weather data for a given city. A Node/Express proxy server is used to securely handle API requests and hide the API key using environment variables.

## Features

- Search for weather by city name
- Displays current location, temperature, and conditions
- Proxy server used to keep API key secure
- Built with React, Express, and the Fetch API

## Project Structure

- `fetching-data-in-react/` – React frontend
- `proxy-server/` – Express backend used as a secure API proxy (stored locally only)

## How to Run Locally

### 1. Clone the repository

<!-- ```bash
git clone https://github.com/YOUR_USERNAME/fetching-data-in-react.git
cd fetching-data-in-react


API Key Security
The API key is stored in a .env file inside the proxy-server folder. The .env file and node_modules are included in .gitignore so they are not pushed to GitHub.

The React frontend makes requests to http://localhost:3000, and the proxy server forwards those requests to the WeatherAPI, using the key stored in the environment file.

Technologies Used

React

Vite

Express

Node.js

WeatherAPI

CORS and dotenv

NOTES:

This app was built as part of a Fetching Data in React lab during the Software Engineering Immersive at General Assembly.

The proxy server is not deployed or included in version control, but it can be used locally for secure API access. -->