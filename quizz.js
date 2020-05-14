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
                `<label><input class="answer" name="q${questionNumber}" type="radio" value="${answerValue}">
                    ${answerValue} : ${textAnswer}
                    </label><br>`
            )
        }
        quizzContent.innerHTML += `<div class='answers'>${answers.join('')}</div>`;
    })
}

function correctAnwsers() {
    //todo get all answers of page
    let correctReponse = 0;
    quizzContent = document.getElementById('quizz');
    allAnswers = quizzContent.querySelectorAll('.answers');
    response = document.getElementById('response');

    //On parcourt les questions
    myQuestions.forEach((question, questionNumber) => {
        containerReponse = allAnswers[questionNumber];
        //pour chacune des questions on regarde celle qui a été selectionné
        let selector = `input[name=q${questionNumber}]:checked`;
        let selectedReponse = containerReponse.querySelector(selector) || null;
        if (selectedReponse !== null && selectedReponse.value == myQuestions[questionNumber].correctAnswer) {
            correctReponse++;
            allAnswers[questionNumber].style.color = 'lightgreen';
        } else {
            allAnswers[questionNumber].style.color = 'lightsalmon';
        }
    })
    //On affiche le résultat :
    response.innerHTML = `Bonnes reponses : ${correctReponse} sur ${allAnswers.length}`
}

createQuizz();
document.getElementById('submit').addEventListener('click', correctAnwsers);
