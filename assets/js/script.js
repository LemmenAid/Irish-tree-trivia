const questions = [{
        image: "assets/images/Hero_image_2.jpg",
        question: "How much of Ireland is covered with native forest?",
        answers: [{
                text: "2%",
                correct: true
            },
            {
                text: "11%",
                correct: false
            },
            {
                text: "27%",
                correct: false
            },
            {
                text: "33%",
                correct: false
            },
        ]
    },
    {
        question: "How much of Ireland was once upon a time covered with forest?",
        answers: [{
                text: "50%",
                correct: false
            },
            {
                text: "60%",
                correct: false
            },
            {
                text: "70%",
                correct: false
            },
            {
                text: "80%",
                correct: true
            },
        ]
    },
    {
        question: "What does the Latin word 'arboretum' mean?",
        answers: [{
                text: "Group of trees near water",
                correct: false
            },
            {
                text: "Ancient field",
                correct: false
            },
            {
                text: "Woodland glade",
                correct: false
            },
            {
                text: "Place with trees",
                correct: true
            },
        ]
    },
    {
        question: "Which of the following trees does NOT produce nuts?",
        answers: [{
                text: "Hazel",
                correct: false
            },
            {
                text: "Oak",
                correct: false
            },
            {
                text: "Juniper",
                correct: true
            },
            {
                text: "Hickory",
                correct: false
            },
        ]
    },
    {
        question: "What tree has earned the nickname 'tree of the dead'?",
        answers: [{
                text: "Hawthorn (Crataegus monogyna)",
                correct: false
            },
            {
                text: "Yew (Taxus baccata)",
                correct: true
            },
            {
                text: "Wych Elm (Ulmus glabra)",
                correct: false
            },
            {
                text: "Silver birch (Betula pendula)",
                correct: false
            },
        ]
    },
    {
        question: "What is the national tree of Ireland?",
        answers: [{
                text: "Sessile Oak (Quercus petraea)",
                correct: true
            },
            {
                text: "Holly (Ilex aquifolium)",
                correct: false
            },
            {
                text: "Whitethorn / Hawthorn (Crataegus)",
                correct: false
            },
            {
                text: " Mountain Ash / Rowan (Sorbus aucuparia)",
                correct: false
            },
        ]
    },
    {
        question: "The tallest tree in Ireland is a Douglas fir at the Powerscourt Estate in Co. Wicklow, but how tall is this tree?",
        answers: [{
                text: "31 meter",
                correct: false
            },
            {
                text: "43 meter",
                correct: false
            },
            {
                text: "56 meter",
                correct: true
            },
            {
                text: "64 meter",
                correct: false
            },
        ]
    },
    {
        question: "Which of the following trees is NOT a native Irish tree?",
        answers: [{
                text: "Scots Pine (Pinus sylvestris)",
                correct: false
            },
            {
                text: "Weeping Golden Willow (Salix × sepulcralis 'Chrysocoma')",
                correct: false
            },
            {
                text: "Guelder Rose (Viburnum opulus)",
                correct: false
            },
            {
                text: "Horse Chestnut (Aesculus hippocastanum)",
                correct: true
            },
        ]
    },
    {
        question: "Most timber can float in water, but which of the following will sink?",
        answers: [{
                text: "Aspen (Populus tremula)",
                correct: false
            },
            {
                text: "Ebony (Diospyros ebenum)",
                correct: true
            },
            {
                text: "Spindle (Euonymus europaeus)",
                correct: false
            },
            {
                text: "Arbutus (Arbutus unedo)",
                correct: false
            },
        ]
    },
    {
        question: "Ireland has 3 native conifers, which one below is not one of them?",
        answers: [{
                text: "Juniper (Juniperus)",
                correct: false
            },
            {
                text: "Yew (Taxus baccata)",
                correct: false
            },
            {
                text: "Larch (Larix)",
                correct: true
            },
            {
                text: "Scots Pine (Pinus sylvestris)",
                correct: false
            },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/**
 * Starts the quiz
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    showQuestion();
}

/**
 * Shows the question with answer options to the player
 */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Set the image source
    const questionImage = document.getElementById("question-image");
    questionImage.src = currentQuestion.image;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/** 
 * Removes the html answer options buttons 
 */
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * selects answer correct or incorrect
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    /* Shows correct answer after answering and disables answer options */
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    /* Show the next button after answering */
    nextButton.style.display = "block";
}

/**
 * Shows score after all questions are answered
 */
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

/**
 * Shows next question, unless all questions are done, then show score
 */
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();