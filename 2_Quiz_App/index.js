const questions = [
    {
        question: "What is Love?",
        answers: [
            {text: "Understanding", correct: false},
            {text: "Dhokha", correct: true},
            {text: "Light in Dark", correct: false},
            {text: "None of These", correct: false}
        ]
    },
    {
        question: "What is Love?",
        answers: [
            {text: "Understanding", correct: false},
            {text: "Dhokha", correct: true},
            {text: "Light in Dark", correct: false},
            {text: "None of These", correct: false}
        ]
    },
    {
        question: "What is Love?",
        answers: [
            {text: "Understanding", correct: false},
            {text: "Dhokha", correct: true},
            {text: "Light in Dark", correct: false},
            {text: "None of These", correct: false}
        ]
    },
    {
        question: "What is Love?",
        answers: [
            {text: "Understanding", correct: false},
            {text: "Dhokha", correct: true},
            {text: "Light in Dark", correct: false},
            {text: "None of These", correct: false}
        ]
    },
    {
        question: "What is Love?",
        answers: [
            {text: "Understanding", correct: false},
            {text: "Dhokha", correct: true},
            {text: "Light in Dark", correct: false},
            {text: "None of These", correct: false}
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState(); //hide the previous question and option
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    //add options as button one by one using for loop
    currentQuestion.answers.forEach((option) => {
        const button = document.createElement('button');
        button.innerHTML = option.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(option.correct){
            button.dataset.correct = option.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //disable an show correct answer if select any one option
    Array.from(answerButtons.children).forEach(option => {
        if(option.dataset.correct === "true"){
            option.classList.add('correct');
        }
        option.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

