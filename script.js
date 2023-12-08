// script.js

// 함수 엔드포인트 URL
const functionUrl = "https://testfunctionxx.azurewebsites.net/api/HttpTrigger3";

// 클릭 이벤트 핸들러
async function vote(id) {
    try {
        const response = await fetch(`${functionUrl}/api/vote?id=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error('Failed to vote:', response.statusText);
            return;
        }

        const result = await response.json();
        console.log(result);

        // 여기에서 투표 결과에 따른 UI 업데이트 로직을 추가할 수 있습니다.

    } catch (error) {
        console.error('Error while voting:', error);
    }
}

// 각 버튼에 이벤트 리스너 등록
document.getElementById('button1').addEventListener('click', () => vote(1));
document.getElementById('button2').addEventListener('click', () => vote(2));
document.getElementById('button3').addEventListener('click', () => vote(3));
