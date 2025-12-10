import express from 'express';
import path from 'path';
import * as fs from 'node:fs/promises';
import cors from 'cors'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors()); // 명령어를 입력하면 문제가 해결된다.

// 정적 파일 제공 (public 폴더)
app.use(express.static(path.join(__dirname)));

// 모든 페이지 호스팅
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mainPage', 'mainPage.html'));
});

app.get('/sampleQuestions', (req, res) => {
    res.sendFile(path.join(__dirname, 'sampleQuestions', 'sampleQuestions.html'));
});

app.get('/wordTest', (req, res) => {
    res.sendFile(path.join(__dirname, 'wordTest', 'wordTest.html'));
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

app.get('/sampleQuestions/api/questions', async(req, res) => {
    try{
        const data = await fs.readFile(path.join(__dirname, 'sampleQuestions', 'sampleQuestions.json'));
        const questions = JSON.parse(data);
        res.json(questions);
    }
    catch(error){
        console.error('파일 읽기 오류:', error);
        res.status(500).send('서버 오류: 문제 파일을 불러오는데 실패했습니다.')
    }
});

app.get('/wordTest/api/words', async(req, res) => {
    try{
        const data = await fs.readFile(path.join(__dirname, 'wordTest', 'wordTest.json'));
        const words = JSON.parse(data);
        res.json(words);
    }
    catch(error){
        console.error('파일 읽기 오류:', error);
        res.status(500).send('서버 오류: 문제 파일을 불러오는데 실패했습니다.')
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


