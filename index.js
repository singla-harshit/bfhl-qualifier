require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const OFFICIAL_EMAIL = "harshit0685.be23@chitkara.edu.in";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getFibonacci = (n) => {
    if (typeof n !== 'number' || n <= 0) return [];
    if (n === 1) return [0];
    let sequence = [0, 1];
    while (sequence.length < n) {
        let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
};

const isPrime = (num) => {
    if (typeof num !== 'number' || num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getGCD = (a, b) => {
    return b === 0 ? a : getGCD(b, a % b);
};

const getHCF = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = getGCD(arr[i], result);
    }
    return result;
};

const getLCM = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let gcd = getGCD(arr[i], result);
        result = (arr[i] * result) / gcd;
    }
    return result;
};

const getAIResponse = async (question) => {
    try {
        if (!process.env.GEMINI_API_KEY) return "API_KEY_MISSING";
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `Answer the following question with strictly one single word. Do not write a sentence. Question: ${question}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text.trim().split(/\s+/)[0];
    } catch (error) {
        console.error("AI Error:", error);
        return "AI_ERROR";
    }
};

app.get('/health', (req, res) => {
    res.status(200).json({
        "is_success": true,
        "official_email": OFFICIAL_EMAIL
    });
});

app.post('/bfhl', async (req, res) => {
    try {
        const body = req.body;
        if (!body || Object.keys(body).length === 0) {
            throw new Error("Empty request body");
        }

        let responseData = null;

        if ("fibonacci" in body) {
            const n = parseInt(body.fibonacci);
            if (isNaN(n)) throw new Error("Invalid Integer for fibonacci");
            responseData = getFibonacci(n);
        } else if ("prime" in body) {
            if (!Array.isArray(body.prime)) throw new Error("Invalid Array for prime");
            responseData = body.prime.filter(num => isPrime(num));
        } else if ("lcm" in body) {
            if (!Array.isArray(body.lcm)) throw new Error("Invalid Array for lcm");
            responseData = getLCM(body.lcm);
        } else if ("1cm" in body) {
            if (!Array.isArray(body["1cm"])) throw new Error("Invalid Array for lcm");
            responseData = getLCM(body["1cm"]);
        } else if ("hcf" in body) {
            if (!Array.isArray(body.hcf)) throw new Error("Invalid Array for hcf");
            responseData = getHCF(body.hcf);
        } else if ("AI" in body) {
            if (typeof body.AI !== 'string') throw new Error("Invalid String for AI");
            responseData = await getAIResponse(body.AI);
        } else {
            return res.status(400).json({
                "is_success": false,
                "official_email": OFFICIAL_EMAIL,
                "message": "Invalid Key. Allowed: fibonacci, prime, lcm, hcf, AI"
            });
        }

        res.json({
            "is_success": true,
            "official_email": OFFICIAL_EMAIL,
            "data": responseData
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            "is_success": false,
            "official_email": OFFICIAL_EMAIL,
            "message": error.message || "Internal Server Error"
        });
    }
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});