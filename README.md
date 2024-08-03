# Crypto Tracker

A Next.js application to display real-time cryptocurrency data fetched from a MongoDB database. The application uses Tailwind CSS for styling and Redux for state management, persisting the state in localStorage.


## Features

- Display real-time cryptocurrency data
- Fetch data from MongoDB
- Use Redux for state management with localStorage persistence
- Styled with Tailwind CSS

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (v4 or later)

### Step-by-Step Guide

1. **Clone the Repository**

    ```bash
    git clone https://github.com/vickychaudhary/crypto-dashboard.git
    cd crypto-dashboard
    ```

2. **Install Dependencies**

    ```bash
    cd frontend
    npm install
    cd backend
    npm install
    ```
3. **Configure APIKEY (Only when you get 401 error i.e credits are lost**
        Inside backend directory in .env file.
       Update LIVECOINWATCH_API_KEY from https://www.livecoinwatch.com/tools/api#try.
      
    
4. **Configure MongoDB**

    Ensure you have MongoDB installed and running. You can follow the official installation guide [here](https://docs.mongodb.com/manual/installation/).


    ```plaintext
    //If mongodb port is different then Inside backend directory update MONGO_URI in .env file 
    //(Make sure Cryptos is mentioned at last)
    
    MONGODB_URI= mongodb://localhost:27017/Cryptos
    
    //Same Update in frontend in app/api/data/route.ts
    
    update const uri = "mongodb://localhost:27017/Cryptos";
    ```

5. **Start the Development Server**
   Run the frontend service from /frontend directory
    ```bash
    cd frontend 
    npm run dev
    ```

    Run the backend service from /backend directory
    ```bash
    cd backend 
    npm run dev
    ```

6. **Build and Start the Production Server**

    ```bash
    cd frontend
    npm start
    ```

    ```bash
    cd backend
    npm start
    ```
**Your application will be running on http://localhost:3000**
