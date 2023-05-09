let setQuestion; // 숫자문제
let generationRandomNumber;   // 숫자 생성기
let num_list = []; // 적었던 배열 기억하기            

function getRandomNumber() {  // 새로운 문제출제 함수
    generationRandomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // 숫자생성기
    setQuestion = []; // 숫자문제
    for (let i = 0; i < 4; i++) {
    let randomNumber = generationRandomNumber.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
        setQuestion.push(randomNumber);
    }
        
}

getRandomNumber()  // 숫자를 뽑는다
console.log(setQuestion); // console.log() 확인용            

// DOM등록
const question = document.querySelector('.question');
const body = document.querySelector('body');
const showTitle = document.querySelector('.game-number');
showTitle.textContent = '4자리 숫자를 맞춰보세요';  

// randomNumber 나와있음 = ex) 1392
const form = document.querySelector('.form-content');
// const input = document.createElement('input');
const input = document.querySelector('.nes-input')
input.maxLength = 4;
const button = document.querySelector('.form-btn');
button.textContent = '입력';

// 진행바
const progressBar = document.querySelector('.nes-progress');
const formAnswer = document.querySelector('.form-answer');
const rememberList = document.querySelector('.remember-list');  // 기억


question.append(showTitle, form, formAnswer);
form.append(input, button);


var wrongCount = 0;  // wrongCount 초기화
        

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (setQuestion.join('') === input.value) {  // 문제를 맞췄을 때
        console.log(input.value.split('')); // 문제 확인용
        formAnswer.textContent = '홈런 ~~!'
        input.value = '';  // 초기화
        console.log(input.value);
        input.focus();
        console.log(num_list);
        num_list.push(input.value);
        getRandomNumber();
        wrongCount = 0;
        }
                    
        else {       // 답이 틀렸을 때      strike, ball 알려주기
            let arrayAnswers = input.value.split('');
            progressBar.value += 100 / 15; // 난이도 조절시 으음..
            console.log(progressBar.value);
            let strike = 0;
            let ball = 0;
            wrongCount++;   

            num_list.push(input.value);
            console.log(num_list);
            let rememberLi = document.createElement('li');
            rememberLi.textContent = input.value;
            // rememberList.append(rememberLi);                    
            console.log(rememberLi.textContent);

            if (wrongCount > 15) {
                formAnswer.textContent = `10번넘게 틀림!~ formAnswer은 ${setQuestion.join('')}입니다.`
                getRandomNumber();
                wrongCount = 0;
                } else { // 기회(wrongCount)가 남았을 경우
                    for (let i = 0; i < 4; i++) {
                        if (Number(arrayAnswers[i]) === setQuestion[i]) { // 같은자리인지 확인 (strike 판단)
                            strike++;
                            input.value = '';
                            input.focus();
                        } else if (setQuestion.indexOf(Number(arrayAnswers[i])) > -1) { // 같은 자리는 아니지만, 숫자가 겹치는지 확인 (ball 판단)
                            ball++;
                            input.value = '';
                            input.focus();
                        }
                            formAnswer.textContent = `strike:${strike}   ball:${ball}
                            현재 ${15 - wrongCount}번의 기회가 남아있습니다.`;
                            console.log(rememberLi.textContent);
                        }                 
                    }
                    const newLi = document.createElement('li');
                    rememberLi = `${wrongCount}.${rememberLi.textContent}
                    ${strike}S${ball}B`
                    newLi.append(rememberLi);
                    rememberList.append(newLi);
                }
            })
        
        