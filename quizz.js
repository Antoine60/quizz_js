var currentQuestion = 0;
var score = 0;
const myQuestions = [
    {
        question:  "What is the scientific name of a butterfly?",
        answers: {
            a: "Apis",
            b: "Coleoptera",
            c: "Formicidae",
            d: "Rhopalocera"
        },
        correctAnswer: "c"
    },
    {
        question: "How hot is the surface of the sun?",
        answers: {
            a: "1,233 K",
            b: "5,778 K",
            c: "12,130 K"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Spain?",
        answers: {
            a: "Berlin",
            b: "Buenos Aires",
            c: "Madrid"
        },
        correctAnswer: "c"
    },
    {
        question: "How tall is Mount Everest?",
        answers: {
            a: "6,683 ft (2,037 m)",
            b: "7,918 ft (2,413 m)",
            c: "19,341 ft (5,895 m)",
            d: "29,029 ft (8,847 m)"
        },
        correctAnswer: "c"
    },
];

function loadQuizz() {

    quizzContent = document.getElementById('quizz');

    const currentQuizzData = myQuestions[currentQuestion];
    // myQuestions.forEach((question, questionNumber) => {

    quizzContent.innerHTML = currentQuizzData.question + '<br>';
    const answers = [];
    let idNumber = 0;
    for (const [answerValue, textAnswer] of Object.entries(currentQuizzData.answers)) {
        ++idNumber;
        answers.push(
            `<li><input class="answer" id="${idNumber}" name="q${currentQuestion}" type="radio" value="${answerValue}">
                    <label for="${idNumber}">${answerValue} : ${textAnswer}
                    </label></li>`
        )
    }

    quizzContent.innerHTML += `<ul class='answers'>${answers.join('')}</ul>`;

}

function getSelectedAnswer() {
    allAnswers = quizzContent.querySelectorAll('.answer');
    let answer = undefined;
    allAnswers.forEach((element) => {
        if (element.checked) {
            answer = element.value;
        }
    });
    return answer;
}

loadQuizz();
document.getElementById('submit').addEventListener('click', () => {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === myQuestions[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
    }
    if (currentQuestion >= myQuestions.length) {
        quizz = document.getElementById('quizz-container');
        quizz.innerHTML = `You get a score of ${score}/${myQuestions.length}
        <button onclick=location.reload()>Reload</button>`;
    } else {
        loadQuizz();
    }
});
