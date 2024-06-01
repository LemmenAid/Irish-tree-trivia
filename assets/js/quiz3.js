const questions = [{
        image: "assets/images/q3_1.jpg",
        question: "Trom",
        answers: [{
                text: "Alder (Alnus glutinosa)",
                correct: false
            },
            {
                text: "Whitebeam (Sorbus hibernica)",
                correct: false
            },
            {
                text: "Elder (Sambucus nigra)",
                correct: true
            },
            {
                text: "Guelder Rose (Viburnum opulus)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_2.jpg",
        question: "Dair ghaelach",
        answers: [{
                text: "Sessile Oak (Quercus petraea)",
                correct: true
            },
            {
                text: "Silver Birch (Betula pendula)",
                correct: false
            },
            {
                text: "Rowan / Mountain Ash (Sorbus aucuparia)",
                correct: false
            },
            {
                text: "Yew (Taxus baccata)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_3.jpg",
        question: "Iúr",
        answers: [{
                text: "Juniper (Juniperus)",
                correct: false
            },
            {
                text: "Yew (Taxus baccata)",
                correct: true
            },
            {
                text: "Scots Pine (Pinus syvestris)",
                correct: false
            },
            {
                text: "Holly (Ilex aquifolium)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_4.jpg",
        question: "Cuileann",
        answers: [{
                text: "Downy Birch (Betula pubescens",
                correct: false
            },
            {
                text: "Hazel (Corylus avellana)",
                correct: false
            },
            {
                text: "Holly (Ilex aquifolium)",
                correct: true
            },
            {
                text: "Ash (Fraxinus excelsior)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_5.jpg",
        question: "Leamhán gallda",
        answers: [{
                text: "Hawthorn (Crataegus monogyna)",
                correct: false
            },
            {
                text: "Elm (Ulmus procera)",
                correct: true
            },
            {
                text: "Grey Willow (Salix cinerea)",
                correct: false
            },
            {
                text: "Silver birch (Betula pendula)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_6.jpg",
        question: "Fearnóg",
        answers: [{
                text: "Dogwood (Cornus sanguinea)",
                correct: false
            },
            {
                text: "Field Maple (Acer campestre)",
                correct: false
            },
            {
                text: "Alder (Alnus glutinosa)",
                correct: true
            },
            {
                text: " Mountain Ash / Rowan (Sorbus aucuparia)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_7.jpg",
        question: "Sceach gheal",
        answers: [{
                text: "Aspen (Populus tremula)",
                correct: false
            },
            {
                text: "Whitebeam (Sorbus hibernica)",
                correct: false
            },
            {
                text: "Elder (Sambucus nigra)",
                correct: false
            },
            {
                text: "Hawthorn / Whitethorn (Crataegus monogyna)",
                correct: true
            },
        ]
    },
    {
        image: "assets/images/q3_8.jpg",
        question: "	Saileach liath",
        answers: [{
                text: "Grey Willow (Salix cinerea)",
                correct: true
            },
            {
                text: "White Willow (Salix alba)",
                correct: false
            },
            {
                text: "Creeping Willow (Salix repens)",
                correct: false
            },
            {
                text: "Osier Willow (Salix viminalis)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_9.jpg",
        question: "	Feá",
        answers: [{
                text: "Beech (Fagus sylvatica)",
                correct: true
            },
            {
                text: "Ash (Fraxinus excelsior)",
                correct: false
            },
            {
                text: "Elder (Sambucus nigra)",
                correct: false
            },
            {
                text: "Pedunculate Oak (Quercus robur)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q3_10.jpg",
        question: "	Coll",
        answers: [{
                text: "Crab Apple (Malus sylvestris)",
                correct: false
            },
            {
                text: "Guelder Rose (Viburnum opulus)",
                correct: false
            },
            {
                text: "Wych Elm (Ulmus glabra)",
                correct: false
            },
            {
                text: "Hazel (Corylus avellana)",
                correct: true
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
// code used from GreatStack Channel on YouTube:
// How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    showQuestion();
}

/**
 * Shows the question with answer options to the player
 */ 
 // code used from GreatStack Channel on YouTube:
 // How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript
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
// code used from GreatStack Channel on YouTube:
// How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * selects answer correct or incorrect
 */
// code used from GreatStack Channel on YouTube:
// How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript
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
 * Show score and message depending on score
 */
// Used from GreatStack Channel on YouTube
// Adapted this function to add message depending on the score
function showScore() {
    resetState();
    let message = "";
    if (score === 0) {
        message = "Weeping Willow! You scored 0 out of 10.";
    } else if (score === 1) {
        message = "Roots and shoots! You scored 1 out of 10.";
    } else if (score === 2) {
        message = "Sad Sapling! You scored 2 out of 10.";
    } else if (score === 3) {
        message = "You're branching out.. You scored 3 out of 10!";
    } else if (score === 4) {
        message = "Forest factual, you scored 4 out of 10!";
    } else if (score === 5) {
        message = "Leafy Lore, you scored 5 out of 10!";
    } else if (score === 6) {
        message = "Canopy Cute, You scored 6 out of 10!";
    } else if (score === 7) {
        message = "Top of the Trees! You scored 7 out of 10.";
    } else if (score === 8) {
        message = "Sapling Savvy! You scored 8 out of 10.";
    } else if (score === 9) {
        message = "Timber talent! You scored 9 out of 10.";
    } else if (score === 10) {
        message = "Woodland Wisdom! You scored 10 out of 10.";
    }
    questionElement.innerHTML = message;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

/**
 * Shows next question, unless all questions are done, then show score
 */
// code used from GreatStack Channel on YouTube:
// How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript
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