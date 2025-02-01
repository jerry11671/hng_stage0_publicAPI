# HNG STAGE 0 TASK

This is a simple Node.js API built with Express.js that provides a basic HTTP endpoint to retrieve some static data. The API returns a JSON object with an email, current datetime, and a GitHub URL.

## Table of Contents

- [HNG STAGE 0 TASK](#hng-stage-0-task)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [API Documentation](#api-documentation)
    - [Endpoint URL](#endpoint-url)
    - [Request/Response Format](#requestresponse-format)
      - [Request:](#request)
      - [Response:](#response)
    - [Example Usage](#example-usage)
  - [Backlink](#backlink)

## Setup

To run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/jerry11671/hng_stage0_publicAPI.git
    ```

2. Navigate into the project directory:
    ```bash
    cd publicAPI
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. The server will be running on `http://localhost:5000`.

## API Documentation

### Endpoint URL

**GET** `/api/task0/retrieve`

This endpoint returns a JSON object containing:
- Email
- Current date and time (ISO 8601 format)
- GitHub repository URL

### Request/Response Format

#### Request:

- Method: `GET`
- URL: `https://hng-stage-0-z5rc.onrender.com/api/task0/retrieve`

#### Response:

- Status Code: `200 OK`
- Content Type: `application/json`

```json
{
  "email": "jerrygodson3@gmail.com",
  "current_datetime": "2025-02-01T12:34:56.789Z",
  "github_url": "https://github.com/jerry11671/publicAPI.git"
}
```

### Example Usage

**Request:**

```bash
curl https://hng-stage-0-z5rc.onrender.com/api/task0/retrieve
```

**Response:**

```json
{
  "email": "jerrygodson3@gmail.com",
  "current_datetime": "2025-02-01T12:34:56.789Z",
  "github_url": "https://github.com/jerry11671/hng_stage0_publicAPI.git"
}
```

## Backlink

For hiring developers in nodejs, check out the link below:

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---
