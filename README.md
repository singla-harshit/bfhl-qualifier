# BHFL API

This is a Node.js Express application that provides a REST API for various mathematical operations (Fibonacci, Prime numbers, LCM, HCF) and integrates with Google's Gemini AI for generating one-word answers to questions.

## Features

- **Fibonacci Sequence**: Generate the first `n` Fibonacci numbers.
- **Prime Number Filter**: Filter prime numbers from a given array.
- **LCM Calculation**: Calculate the Least Common Multiple of an array of numbers.
- **HCF Calculation**: Calculate the Highest Common Factor (GCD) of an array of numbers.
- **AI Integration**: Ask a question and get a single-word response using Google's Gemini AI.
- **Health Check**: Simple endpoint to check the API status.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)
- A Google Gemini API Key

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Google Gemini API key and optionally a port number.
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   PORT=3000
   ```

## Usage

Start the server using:
```bash
npm start
```
The server will run on the specified port (default: 3000).

## API Endpoints

### 1. Health Check

Checks if the server is running.

- **URL**: `/health`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "is_success": true,
    "official_email": "harshit0685.be23@chitkara.edu.in"
  }
  ```

### 2. Main Operation Endpoint

Performs operations based on the input key provided in the JSON body.

- **URL**: `/bfhl`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`

#### Supported Payload Keys (Send ONE key at a time):

**a. Fibonacci**
Returns the first `n` numbers of the Fibonacci sequence.
- **Request Body**:
  ```json
  {
    "fibonacci": 10
  }
  ```
- **Response**:
  ```json
  {
    "is_success": true,
    "official_email": "harshit0685.be23@chitkara.edu.in",
    "data": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  }
  ```

**b. Prime Check**
Filters prime numbers from the provided array.
- **Request Body**:
  ```json
  {
    "prime": [2, 3, 4, 5, 6, 7]
  }
  ```
- **Response**:
  ```json
  {
    "is_success": true,
    "official_email": "harshit0685.be23@chitkara.edu.in",
    "data": [2, 3, 5, 7]
  }
  ```

**c. LCM (Least Common Multiple)**
Calculates LCM of the provided numbers.
- **Request Body**:
  ```json
  {
    "lcm": [12, 15, 20]
  }
  ```
- **Response**:
  ```json
  {
    "is_success": true,
    "official_email": "harshit0685.be23@chitkara.edu.in",
    "data": 60
  }
  ```

**d. HCF (Highest Common Factor)**
Calculates HCF (GCD) of the provided numbers.
- **Request Body**:
  ```json
  {
    "hcf": [24, 60, 48]
  }
  ```
- **Response**:
  ```json
  {
    "is_success": true,
    "official_email": "harshit0685.be23@chitkara.edu.in",
    "data": 12
  }
  ```

**e. AI Question**
Asks a question to Gemini AI and gets a one-word answer.
- **Request Body**:
  ```json
  {
    "AI": "What is the capital of France?"
  }
  ```
- **Response**:
  ```json
  {
    "is_success": true,
    "official_email": "harshit0685.be23@chitkara.edu.in",
    "data": "Paris"
  }
  ```

## Error Handling

If an invalid key or invalid data format is sent, the API returns a `400` Bad Request status with an error message.

Example Error Response:
```json
{
  "is_success": false,
  "official_email": "harshit0685.be23@chitkara.edu.in",
  "message": "Invalid Key. Allowed: fibonacci, prime, lcm, hcf, AI"
}
```

## Dependencies

- `express`: Web framework for Node.js.
- `@google/generative-ai`: Client library for Google's Gemini AI.
- `body-parser`: Middleware to parse incoming request bodies.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `dotenv`: Module to load environment variables.

## License

ISC
