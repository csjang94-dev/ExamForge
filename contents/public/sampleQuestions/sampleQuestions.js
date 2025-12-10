async function fetchSampleQuestionsRender() {
    try {
        // 서버의 API 엔드포인트로 Fetch 요청
        const b = await fetch('/sampleQuestions/api/questions'); 
        
        // 응답을 JSON 형식으로 파싱
        const questions = await b.json(); 

        const questions_container = document.getElementById('questions');
        
        // 데이터를 순회하며 HTML로 만들어 페이지에 추가
        questions.forEach(item => {
            const elementPtag = document.createElement('p');
            
            elementPtag.innerHTML = `[ 문제 ${item.number} ] <br> ${item.question} <br> <br> A : ${item.A}
            <br> B : ${item.B} <br> C : ${item.C} <br> D : ${item.D} <br> <br> 정답 : ${item.answer} <br> <br> `;
            
            questions_container.appendChild(elementPtag);
        });
        

    } catch (error) {
        console.error('문제를 불러오는 중 오류 발생:', error);
        questions.textContent = '데이터를 불러오는데 실패했습니다.';
        
    }
}

fetchSampleQuestionsRender();