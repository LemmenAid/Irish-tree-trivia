 const questions = [{
        image: "assets/images/q2_1.jpg",
        question: "The wood of this tough tree doesn't rot when waterlogged, instead turning stronger and harder. Male catkins are yellow and dangly, and female catkins are green and oval-shaped..",
        answers: [{
                text: "Wych Elm (Ulmus glabra)",
                correct: false
            },
            {
                text: "Alder (Alnus glutinosa)",
                correct: true
            },
            {
                text: "Grey Willow (Salix cinerea)",
                correct: false
            },
            {
                text: "Spindle (Euonymus europaeus)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_2.jpg",
        question: "Can you identify the trees on this island in Connemara?",
        answers: [{
                text: "Scots Pine (Pinus sylvestris)",
                correct: true
            },
            {
                text: "Larch (Larix decidua)",
                correct: false
            },
            {
                text: "Yew (Taxus baccata)",
                correct: false
            },
            {
                text: "Aspen (Populus tremula)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_3.jpg",
        question: "The ruling majesty of the woods, this tree is featured in the Celtic Tree of Life symbol.",
        answers: [{
                text: "Horse Chestnut (Aesculus hippocastanum)",
                correct: false
            },
            {
                text: "Silver Birch (Betula pendula)",
                correct: false
            },
            {
                text: "Ash (Fraxinus excelsior)",
                correct: false
            },
            {
                text: "Oak (Quercus robur)",
                correct: true
            },
        ]
    },
    {
        image: "assets/images/q2_4.jpg",
        question: "Of Which tree are these beautiful flowers?",
        answers: [{
                text: "Elder (Sambucus nigra)",
                correct: false
            },
            {
                text: "Apple Tree (Malus)",
                correct: true
            },
            {
                text: "Wild Cherry (Prunus avium)",
                correct: false
            },
            {
                text: "Rowan / Mountain Ash (Sorbus aucuparia)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_5.jpg",
        question: "And what about these? These trees are thought to bring good luck to the landowner, and terrible misfortune upon whomever damages it.",
        answers: [{
                text: "Hawthorn / Whitethorn (Crataegus laevigata)",
                correct: true
            },
            {
                text: "Rowan / Mountain Ash (Sorbus aucuparia)",
                correct: false
            },
            {
                text: "Blackthorn / Sloe (Prunus spinosa)",
                correct: false
            },
            {
                text: "Whitebeam (Sorbus hibernica)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_6.jpg",
        question: "Which conifer produces these berries and is used to make a delicious drink?",
        answers: [{
                text: "Scots Pine (Pinus syvestris)",
                correct: false
            },
            {
                text: "Holly (Ilex aquifolium)",
                correct: false
            },
            {
                text: "Rowan / Mountain Ash (Sorbus aucuparia)",
                correct: false
            },
            {
                text: "Juniper (Juniperus communis)",
                correct: true
            },
        ]
    },
    {
        image: "assets/images/q2_7.jpg",
        question: "A slow-growing native evergreen tree, well known for its spiky leaves and red berries.",
        answers: [{
                text: "Hawthorn / Whitethorn (Crataegus monogyna)",
                correct: false
            },
            {
                text: "Ash (Fraxinus excelsior)",
                correct: false
            },
            {
                text: "Holly (Ilex aquifolium)",
                correct: true
            },
            {
                text: "Yew (Taxus baccata)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_8.jpg",
        question: "Ancient, morbid, toxic. This tree is one of the longest-lived native species in Europe. This has made it a symbol of death and doom, but it provides food and shelter for woodland animals.",
        answers: [{
                text: "Scots Pine (Pinus sylvestris)",
                correct: false
            },
            {
                text: "Larch (Larix decidua)",
                correct: false
            },
            {
                text: "Yew (Taxus baccata)",
                correct: true
            },
            {
                text: "Juniper (Juniperus)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_9.jpg",
        question: "These trees can live for up to 200 years and its leaves and berries are a favourite for wildlife.",
        answers: [{
                text: "Hazel (Corylus avellana)",
                correct: false
            },
            {
                text: "Rowan / Mountain Ash (Sorbus aucuparia)",
                correct: true
            },
            {
                text: "Spindle (Euonymus europaeus)",
                correct: false
            },
            {
                text: "Blackthorn / Sloe (Prunus spinosa)",
                correct: false
            },
        ]
    },
    {
        image: "assets/images/q2_10.jpg",
        question: "Feared by the devil. Favoured by foragers. Can you name this tree?",
        answers: [{
                text: "Elder (Sambucus nigra)",
                correct: true
            },
            {
                text: "Alder (Alnus glutinosa)",
                correct: false
            },
            {
                text: "Crab Apple (Malus sylvestris)",
                correct: false
            },
            {
                text: "Guelder Rose (Viburnum opulus)",
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