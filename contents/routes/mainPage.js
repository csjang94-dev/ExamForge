import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
console.log("");
// const __dirname = path.resolve(); // 절대 경로 처리
const currentDir = path.dirname(__filename);
const projectRoot = path.join(currentDir, '..');

// '/' (루트) 경로 요청을 처리
router.get('/', (req, res) => {
    // res.sendFile()을 통해 HTML 파일 전송
    res.sendFile(path.join(projectRoot, 'public', 'mainPage', 'mainPage.html'));
});

// 외부로 라우터를 공개
export default router;