const myQuestions = [
    {
        question: "Question A",
        answers: {
            a: "Reponse A",
            b: "Reponse B",
            c: "Reponse C"
        },
        correctAnswer: "c"
    },
    {
        question: "Question B",
        answers: {
            a: "Reponse A2",
            b: "Reponse B2",
            c: "Reponse C2"
        },
        correctAnswer: "c"
    },
];

function createQuizz() {
    quizzContent = document.getElementById('quizz');
    myQuestions.forEach((question, questionNumber) => {
        quizzContent.innerHTML += question.question + '<br>';
        const answers = [];
        for (const [answerValue, textAnswer] of Object.entries(question.answers)) {
            answers.push(
                `<label><input class="answer" name="q${questionNumber}" type="checkbox" value="${answerValue}">
                    ${answerValue} : ${textAnswer}
                    </label><br>`
            )
        }
        quizzContent.innerHTML += `<div class='answers'>${answers.join('')}</div>`;
    })
}

function correctAnwsers() {
    //todo get all answers of page
    quizzContent = document.getElementById('quizz');
    allAnswers = quizzContent.querySelectorAll('.answers')
    //On parcourt les questions
    myQuestions.forEach((question, questionNumber) => {
        containerReponse = allAnswers[questionNumber];
        //pour chacune des questions on regarde celle qui a été selectionné
        let selector = `input[name=q${questionNumber}]:checked`;
        let selectedReponse = containerReponse.querySelector(selector) || null;
        if(selectedReponse !== null && selectedReponse.value == myQuestions[questionNumber].correctAnswer){
            console.log('bonne réponse');
        }else{
            console.log('mauvaise réponse !!!');
        }
    })
}

createQuizz();
document.getElementById('submit').addEventListener('click', correctAnwsers);
