const quizData = [
    {
        question: "Which programming language is recommended for beginners due to its simplicity and readability?",
        a: "Java",
        b: "Python",
        c: "Swift",
        correct: "b",
    },
    {
        question: "Which programming language is used to create interactive and dynamic web pages?",
        a: "JavaScript",
        b: "Python",
        c: "Ruby",
        correct: "a",
    },
    {
        question: "Which programming language is the most popular for Android app development?",
        a: "Swift",
        b: "C++",
        c: " Java",
        correct: "c",
    },
    {
        question: "What is the disadvantage of C++?",
        a: "Lack of libraries",
        b: "Slow execution speed of programs",
        c: "Complex syntax and high entry threshold",
        correct: "c",
    },
    {
        question: "What is the main application area of Swift language?",
        a: "IOS and macOS application development",
        b: "Server application development",
        c: "Data analysis",
        correct: "a",
    },
];

const main = document.querySelector('.main');
const quiz = document.querySelector('.main__quiz');
const answers = document.querySelectorAll('.answer');
const questionElement = document.querySelector('.question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


const loadQuiz = () => {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

const deselectAnswers = () => {
    answers.forEach(answerEl => answerEl.checked = false)
}

const getSelected = () => {
    let answer;

    answers.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
            <div class="finish">
                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>


                <div class="rating">
                    <h2 style="padding-right: 10px;">Rate this quiz: </h2>
                    <span class="star" data-value="1">☆</span>
                    <span class="star" data-value="2">☆</span>
                    <span class="star" data-value="3">☆</span>
                    <span class="star" data-value="4">☆</span>
                    <span class="star" data-value="5">☆</span>
                </div>

                <a class="back" href="mainpage.html">Go back</a>
            </div>`;



            //Star Rating
            const stars = document.querySelectorAll('.star');

            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const rating = star.getAttribute('data-value');

                    stars.forEach(s => {
                        s.textContent = '☆';
                        s.classList.remove('selected');
                    });

                    for (let i = 0; i < rating; i++) {
                        stars[i].textContent = '★';
                        stars[i].classList.add('selected');
                    }
                });
            });

            submit.style.display = "none";
        }
    }
});

loadQuiz();