
// variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const lastButtonsElement = document.getElementById("last-buttons");
const header = document.querySelector("header");

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
        button.innerText = answer.text;
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
    // Shows correct answer after answering and disables answer options
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // Show the next button after answering
    nextButton.style.display = "block";
}


/**
 * Show score and message depending on score
 */
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
    
    // Add 'play other quiz' button
    const otherQuizButton = document.createElement("button");
    otherQuizButton.textContent = "Play Other Quiz";
    otherQuizButton.id = "next-btn";
    otherQuizButton.style.display = "block";
    
    otherQuizButton.addEventListener("click", () => {
        window.location.href = "https://lemmenaid.github.io/Irish-tree-trivia/index.html"
    });
    lastButtonsElement.appendChild(otherQuizButton);
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


// Add audio element to quiz pages
let audio = document.createElement("audio");
audio.id = "myAudio";
audio.src = "assets/audio/bird-song.wav";
audio.controls = true;
audio.loop = true;
audio.autoplay = false;
audio.controlsList = "nodownload noplaybackrate";

// Add the element to the header
header.appendChild(audio);