# Forex Arbitrage Finder Frontend

## Description

This is a simple react js frontend App to consume  the [Forex arbitrage finder api](https://github.com/mut1sya/forex-arbitrage-finder-api).

## Setup

To set up  the frontend application, take the following steps below:  
### 1. Clone the application

clone the application to your working directory.

    git clone https://github.com/mut1sya/forex-arbitrage-finder-frontend.git

### 2. Add .env

We need to configure the `REACT_APP_ARBITRAGE_API_URL` which specifies where to find our api.
create a `.env` file in the project root directory and add the following key:

`REACT_APP_ARBITRAGE_API_URL`=backend-api-url

an example of this is shown below:

    REACT_APP_ARBITRAGE_API_URL=http://localhost:9000
 

### 3. Install dependencies

    yarn install

### 4. Run the app

To run the app in development mode:

    yarn start

To run the app in production mode, run:
   
    yarn build

This will generate a build folder with  css and js files with can be served with nginx 


### 5. Using docker-compose

To run the application using docker-compose run the command below:

    docker-compose up -d --build  

The app will be started  at:    

    http://localhost:3000