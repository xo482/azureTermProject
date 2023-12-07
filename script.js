// script.js

// 투표 수를 저장할 객체
var voteCounts = {
    1: 0,
    2: 0,
    3: 0
};

// 페이지 로드 시 실행될 함수
window.onload = function() {
    // 버튼 엘리먼트들 가져오기
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");

    // 투표 수를 표시할 p 엘리먼트들 가져오기
    var voteCount1 = document.getElementById("voteCount1");
    var voteCount2 = document.getElementById("voteCount2");
    var voteCount3 = document.getElementById("voteCount3");

    // 각 버튼에 클릭 이벤트 리스너 추가
    button1.onclick = function() { vote(1); };
    button2.onclick = function() { vote(2); };
    button3.onclick = function() { vote(3); };

    // 초기 투표 수 표시
    updateVoteCounts();
};

// 투표 함수
function vote(buttonNumber) {
    // 해당 버튼의 투표 수 증가
    voteCounts[buttonNumber]++;

    // 투표 수 업데이트
    updateVoteCounts();
}

// 투표 수 업데이트 함수
function updateVoteCounts() {
    // 각 버튼의 투표 수를 엘리먼트에 표시
    document.getElementById("voteCount1").innerText = "투표 수: " + voteCounts[1];
    document.getElementById("voteCount2").innerText = "투표 수: " + voteCounts[2];
    document.getElementById("voteCount3").innerText = "투표 수: " + voteCounts[3];
}
