async function fetchWordTestRender() {
    try {
        // 서버의 API 엔드포인트로 Fetch 요청
        const response = await fetch('/wordTest/api/words'); 
        
        // 응답을 JSON 형식으로 파싱
        const words = await response.json(); 

        const answer_btn = document.getElementById('controls_answer_btn');
        const pre_btn = document.getElementById('controls_pre_btn');
        const aft_btn = document.getElementById('controls_aft_btn');
        const answer = document.getElementById('words_answer');
        const description = document.getElementById('words_description');
        const currentNumber = document.getElementById('number');
        let numberWord = 0;
        
        
        // 데이터를 순회하며 HTML로 만들어 페이지에 추가
        answer.textContent = `정답은 ${words[numberWord].answer} 입니다.`;
        description.textContent = words[numberWord].description;
        
        answer_btn.addEventListener('click', () =>{
            answer.classList.toggle('hidden');
            description.classList.toggle('hidden');
            currentNumber.textContent = `${numberWord+1} / 23`

        });
        pre_btn.addEventListener('click', () =>{
            numberWord--;
            if(numberWord < 0){ numberWord = 0; }
            answer.textContent = `정답은 ${words[numberWord].answer} 입니다.`;
            description.textContent = words[numberWord].description;
            currentNumber.textContent = `${numberWord+1} / 23`
        });    
        aft_btn.addEventListener('click', () =>{
            numberWord++;
            if(numberWord > 22){ numberWord = 22; }
            answer.textContent = `정답은 ${words[numberWord].answer} 입니다.`;
            description.textContent = words[numberWord].description;
            currentNumber.textContent = `${numberWord+1} / 23`
        });
        

    } catch (error) {
        console.error('문제를 불러오는 중 오류 발생:', error);
        wards.textContent = '데이터를 불러오는데 실패했습니다.';
        
    }
}

fetchWordTestRender();