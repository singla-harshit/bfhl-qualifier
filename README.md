
---

````markdown
# Chitkara University - Qualifier 1 API

This repository contains the backend API solution for the **Chitkara University Qualifier 1** assessment. The project implements two REST API endpoints using **Node.js** and **Express**, featuring mathematical logic processing and AI integration.

---

## Live Deployment

- **Deployed API URL:** `PASTE YOUR RENDER URL HERE`
- **GitHub Repository:** `PASTE YOUR GITHUB REPO URL HERE`

---

## API Specification

### 1. POST `/bfhl`

This is the main endpoint that handles various logic operations based on the input key.

- **Endpoint:** `https://<your-render-url>/bfhl`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Supported Features & Logic Mapping

| Key        | Input Type | Logic Performed |
|-----------|------------|-----------------|
| `fibonacci` | Integer (`n`) | Returns the first `n` numbers of the Fibonacci series |
| `prime`     | Array (`[]`) | Filters and returns only prime numbers from the array |
| `lcm`       | Array (`[]`) | Calculates the Least Common Multiple (LCM) |
| `hcf`       | Array (`[]`) | Calculates the Highest Common Factor (HCF) |
| `AI`        | String       | Returns a **single-word** answer using Generative AI |

---

#### Request & Response Examples

##### Example 1: Fibonacci

**Request**
```json
{
  "fibonacci": 7
}
````

**Response**

```json
{
  "is_success": true,
  "official_email": "harshit0685.be23@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

---

##### Example 2: AI Integration

**Request**

```json
{
  "AI": "What is the capital of France?"
}
```

**Response**

```json
{
  "is_success": true,
  "official_email": "harshit0685.be23@chitkara.edu.in",
  "data": "Paris"
}
```

---

### 2. GET `/health`

A simple health check endpoint to verify the API status.

* **Endpoint:** `https://<your-render-url>/health`
* **Method:** `GET`

**Response**

```json
{
  "is_success": true,
  "official_email": "harshit0685.be23@chitkara.edu.in"
}
```

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **AI Integration:** Google Gemini (or OpenAI)
* **Deployment:** Render

---

## Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
```

### 4. Run the Server

```bash
npm start
```

The server will start at:
`http://localhost:3000`

---

## Author

**Harshit Singla**

* **Email:** [harshit0685.be23@chitkara.edu.in](mailto:harshit0685.be23@chitkara.edu.in)
* **University:** Chitkara University

```

---

```
