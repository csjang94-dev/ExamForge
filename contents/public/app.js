import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// 정적 파일 제공 (public 폴더)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mainPage', 'mainPage.html'));
});

app.get('/sampleQuestions', (req, res) => {
    res.sendFile(path.join(__dirname, 'sampleQuestions', 'sampleQuestions.html'));
});

app.get('/wordTest', (req, res) => {
    res.sendFile(path.join(__dirname, 'wordTest', 'flashcard.html'));
});

app.get('/examReservation', (req, res) => {
    res.sendFile(path.join(__dirname, 'examReservation', 'examReservation.html'));
});

app.get('/discount', (req, res) => {
    res.sendFile(path.join(__dirname, 'discount', 'discount.html'));
});

app.get('/customerService', (req, res) => {
    res.sendFile(path.join(__dirname, 'customerService', 'customerService.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});