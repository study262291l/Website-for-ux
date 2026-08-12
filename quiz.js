/* =========================================================
   TYPE SOUL QUIZ
   ========================================================= */


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [

    {
        question:
            "What platform is TYPE://SOUL played on?",

        answers: [
            "Roblox",
            "Minecraft",
            "Fortnite",
            "Steam"
        ],

        correct: 0
    },


    {
        question:
            "Which race is associated with bows and ranged combat?",

        answers: [
            "Soul Reaper",
            "Quincy",
            "Hollow",
            "Fullbringer"
        ],

        correct: 1
    },


    {
        question:
            "What do Hollows eventually evolve into?",

        answers: [
            "Quincies",
            "Soul Reapers",
            "Arrancars",
            "Fullbringers"
        ],

        correct: 2
    },


    {
        question:
            "Which of these is a Quincy ability or form?",

        answers: [
            "Shikai",
            "Schrift",
            "Resurrección",
            "Bankai"
        ],

        correct: 1
    },


    {
        question:
            "What does Blut Vene mainly provide?",

        answers: [
            "Increased attack damage",
            "Damage reduction / defense",
            "Faster movement",
            "More weapon drops"
        ],

        correct: 1
    },


    {
        question:
            "Which location is associated with the Quincy faction?",

        answers: [
            "Wandenreich",
            "Soul Society",
            "Hueco Mundo",
            "Karakura Town"
        ],

        correct: 0
    },


    {
        question:
            "Which progression belongs to the Hollow path?",

        answers: [
            "Fishbone → Menos → Adjuchas → Arrancar",
            "Grade 5 → Grade 1 → Elite",
            "Trainee → Shikai → Bankai",
            "Schrift → Vollständig → Letzt Stil"
        ],

        correct: 0
    },


    {
        question:
            "At what grade can a Quincy unlock their Schrift?",

        answers: [
            "Grade 5",
            "Grade 3",
            "Grade 2",
            "Elite Grade"
        ],

        correct: 2
    },


    {
        question:
            "Which of these is NOT one of the Quincy Blut modes?",

        answers: [
            "Blut Vene",
            "Blut Arterie",
            "Blut Kaiser",
            "Both Vene and Arterie are modes"
        ],

        correct: 2
    },


    {
        question:
            "Which Quincy transformation is associated with Elite Grade progression?",

        answers: [
            "Shikai",
            "Vollständig",
            "Resurrección",
            "Segunda Etapa"
        ],

        correct: 1
    }

];


/* =========================================================
   VARIABLES
   ========================================================= */

let currentQuestionIndex = 0;

let selectedAnswer = null;

let score = 0;


/* =========================================================
   ELEMENTS
   ========================================================= */

const quizPanel =
    document.getElementById("quizPanel");

const playerFormSection =
    document.getElementById(
        "playerFormSection"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const answerList =
    document.getElementById(
        "answerList"
    );

const currentQuestion =
    document.getElementById(
        "currentQuestion"
    );

const totalQuestions =
    document.getElementById(
        "totalQuestions"
    );

const progressBar =
    document.getElementById(
        "progressBar"
    );

const previousButton =
    document.getElementById(
        "previousButton"
    );

const nextButton =
    document.getElementById(
        "nextButton"
    );

const playerForm =
    document.getElementById(
        "playerForm"
    );

const formScore =
    document.getElementById(
        "formScore"
    );


/* =========================================================
   INITIALISE
   ========================================================= */

totalQuestions.textContent =
    questions.length;

loadQuestion();


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    const question =
        questions[currentQuestionIndex];


    selectedAnswer = null;


    /* Number */

    currentQuestion.textContent =
        String(
            currentQuestionIndex + 1
        ).padStart(2, "0");


    /* Question */

    questionText.textContent =
        question.question;


    /* Progress */

    const progress =
        (
            (currentQuestionIndex + 1)
            /
            questions.length
        ) * 100;


    progressBar.style.width =
        progress + "%";


    /* Clear answers */

    answerList.innerHTML = "";


    /* Letters */

    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    /* Create answer buttons */

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answerButton";


            button.innerHTML = `
                <span class="answerLetter">
                    ${letters[index]}
                </span>
                ${answer}
            `;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(index);

                }
            );


            answerList.appendChild(
                button
            );

        }
    );


    /* Previous */

    previousButton.disabled =
        currentQuestionIndex === 0;


    /* Next */

    if (
        currentQuestionIndex ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "FINISH QUIZ →";

    }

    else {

        nextButton.textContent =
            "NEXT QUESTION →";

    }

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(index) {

    selectedAnswer = index;


    const buttons =
        document.querySelectorAll(
            ".answerButton"
        );


    buttons.forEach(
        function (button, buttonIndex) {

            button.classList.remove(
                "selected"
            );


            if (
                buttonIndex === index
            ) {

                button.classList.add(
                    "selected"
                );

            }

        }
    );

}


/* =========================================================
   NEXT
   ========================================================= */

nextButton.addEventListener(
    "click",
    function () {

        if (
            selectedAnswer === null
        ) {

            alert(
                "Please select an answer first."
            );

            return;

        }


        /* Check answer */

        const correctAnswer =
            questions[
                currentQuestionIndex
            ].correct;


        if (
            selectedAnswer ===
            correctAnswer
        ) {

            score++;

        }


        /* Last question */

        if (
            currentQuestionIndex ===
            questions.length - 1
        ) {

            showForm();

            return;

        }


        /* Next */

        currentQuestionIndex++;

        loadQuestion();

    }
);


/* =========================================================
   PREVIOUS
   ========================================================= */

previousButton.addEventListener(
    "click",
    function () {

        if (
            currentQuestionIndex === 0
        ) {

            return;

        }


        currentQuestionIndex--;

        loadQuestion();

    }
);


/* =========================================================
   SHOW FORM
   ========================================================= */

function showForm() {

    quizPanel.classList.add(
        "hidden"
    );


    playerFormSection.classList.remove(
        "hidden"
    );


    formScore.textContent =
        score +
        " / " +
        questions.length;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   FORM SUBMIT
   ========================================================= */

playerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get form data */

        const playerName =
            document.getElementById(
                "playerName"
            ).value;


        const robloxUsername =
            document.getElementById(
                "robloxUsername"
            ).value;


        const favouriteRace =
            document.getElementById(
                "favouriteRace"
            ).value;


        const experience =
            document.querySelector(
                'input[name="experience"]:checked'
            ).value;


        /* Save result */

        const result = {

            playerName:
                playerName,

            robloxUsername:
                robloxUsername,

            favouriteRace:
                favouriteRace,

            experience:
                experience,

            score:
                score,

            total:
                questions.length

        };


        localStorage.setItem(
            "typeSoulQuizResult",
            JSON.stringify(result)
        );


        /* Go to response page */

        window.location.href =
            "quiz-response.html";

    }
);
