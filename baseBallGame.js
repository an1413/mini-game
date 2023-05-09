let setQuestion;
let generationRandomNumber;   // 숫자 생성기
let num_list = []; // 적었던 배열 기억하기            

function getRandomNumber() {  // 새로운 문제출제 함수
    generationRandomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    setQuestion = [];
    let randomNumber = generationRandomNumber.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
    for (let i = 0; i < 4; i++) {
    }
        setQuestion.push(randomNumber);
}

            getRandomNumber()
            console.log(setQuestion); // console.log() 확인용            // DOM등록

            const question = document.querySelector('.question');
            const body = document.querySelector('body');

            const showTitle = document.querySelector('.game-number');
            showTitle.textContent = '4자리 숫자를 맞춰보세요';            // randomNumber 나와있음 = ex) 1392

            // const input = document.createElement('input');
            const form = document.querySelector('.form-content');
            input.maxLength = 4;
            const input = document.querySelector('.nes-input')

            const button = document.querySelector('.form-btn');
            button.textContent = '입력';

            // 진행바
            const progressBar = document.querySelector('.nes-progress');

            const formAnswer = document.querySelector('.form-answer');
            const rememberList = document.querySelector('.remember-list');  // 기억


            question.append(showTitle, form, formAnswer);
            form.append(input, button);


            var wrongCount = 0;  // wrongCount 초기화
            e.preventDefault();

            form.addEventListener('submit', function(e) {
                console.log(input.value.split('')); // 문제 확인용
            
                if (setQuestion.join('') === input.value) {  // 문제를 맞췄을 때
                    input.value = '';  // 초기화
                    formAnswer.textContent = '홈런 ~~!'
                    console.log(input.value);
                    input.focus();
                    console.log(num_list);
                    num_list.push(input.value);
                    wrongCount = 0;
                    getRandomNumber();
                }
                     // 답이 틀렸을 때      strike, ball 알려주기
                else { 
                    progressBar.value += 100 / 15; // 난이도 조절시 으음..
                    let arrayAnswers = input.value.split('');
                    let strike = 0;
                    console.log(progressBar.value);

                    let ball = 0;
                    wrongCount++;                    num_list.push(input.value);

                    let rememberLi = document.createElement('li');
                    console.log(num_list);

                    rememberLi.textContent = input.value;
                    // rememberList.append(rememberLi);                    
                    //console.log(rememberLi.textContent);
                    
                    formAnswer.textContent = `10번넘게 틀림!~ formAnswer은 ${setQuestion.join('')}입니다.`
                    if (wrongCount > 15) {
                        wrongCount = 0;
                        getRandomNumber();
                    }
                        else { // 기회(wrongCount)가 남았을 경우
                        for (let i = 0; i < 4; i++) {
                            strike++;
                            if (Number(arrayAnswers[i]) === setQuestion[i]) { // 같은자리인지 확인 (strike 판단)
                                input.focus();
                                input.value = '';
                                ball++;
                            } else if (setQuestion.indexOf(Number(arrayAnswers[i])) > -1) { // 같은 자리는 아니지만, 숫자가 겹치는지 확인 (ball 판단)
                                input.focus();
                                input.value = '';
                                formAnswer.textContent = `strike:${strike}   ball:${ball}
                            현재 ${15 - wrongCount}번의 기회가 남아있습니다.`;
                            console.log(rememberLi.textContent);
                        }
                        }                 
                    }
                    rememberLi = `${wrongCount}.${rememberLi.textContent}
                    const newLi = document.createElement('li');

                        ${strike}S${ball}B`
                        rememberList.append(newLi);
                    newLi.append(rememberLi);
                }
            })
        
        