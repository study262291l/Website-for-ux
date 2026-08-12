document.addEventListener("DOMContentLoaded", () => {

    const buildForm = document.getElementById("buildForm");

    if (!buildForm) return;


    buildForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const playerName =
            document.getElementById("playerName").value.trim();

        const experience =
            document.getElementById("experience").value;

        const combatStyle =
            document.querySelector(
                'input[name="combatStyle"]:checked'
            )?.value;

        const interest =
            document.querySelector(
                'input[name="interest"]:checked'
            )?.value;

        const message =
            document.getElementById("message").value.trim();


        /*
         * -----------------------------------------
         * CALCULATE RECOMMENDED PATH
         * -----------------------------------------
         */

        let recommendedRace = "Soul Reaper";
        let recommendedStyle = "Balanced";
        let reason = "";


        // Ranged players → Quincy
        if (combatStyle === "Ranged") {

            recommendedRace = "Quincy";
            recommendedStyle = "Ranged";

            reason =
                "You prefer keeping your distance and controlling fights from range.";

        }


        // Ability-focused players → Hollow
        else if (combatStyle === "Abilities") {

            recommendedRace = "Hollow";
            recommendedStyle = "Ability-focused";

            reason =
                "You enjoy relying on powerful abilities to overwhelm your opponents.";

        }


        // Close combat + PvP → Soul Reaper
        else if (
            combatStyle === "Melee" &&
            interest === "PvP"
        ) {

            recommendedRace = "Soul Reaper";
            recommendedStyle = "Aggressive";

            reason =
                "You enjoy direct combat and want to take the fight straight to your opponent.";

        }


        // Exploration / Teamwork → Soul Reaper
        else if (
            interest === "Exploration" ||
            interest === "Teamwork"
        ) {

            recommendedRace = "Soul Reaper";
            recommendedStyle = "Versatile";

            reason =
                "You value versatility and enjoy exploring the world or playing alongside others.";

        }


        // Default
        else {

            recommendedRace = "Soul Reaper";
            recommendedStyle = "Balanced";

            reason =
                "Your preferences suggest a flexible playstyle that can adapt to different situations.";

        }


        /*
         * -----------------------------------------
         * EXPERIENCE ADJUSTMENT
         * -----------------------------------------
         */

        let difficulty = "★★☆☆☆";

        if (experience === "Intermediate") {

            difficulty = "★★★☆☆";

        }

        else if (experience === "Experienced") {

            difficulty = "★★★★☆";

        }


        /*
         * -----------------------------------------
         * SAVE SUBMISSION
         * -----------------------------------------
         */

        const submission = {

            playerName: playerName,

            experience: experience,

            combatStyle: combatStyle,

            interest: interest,

            message: message,

            recommendedRace: recommendedRace,

            recommendedStyle: recommendedStyle,

            difficulty: difficulty,

            reason: reason

        };


        sessionStorage.setItem(
            "typeSoulBuildSubmission",
            JSON.stringify(submission)
        );


        /*
         * -----------------------------------------
         * GO TO RESPONSE PAGE
         * -----------------------------------------
         */

        window.location.href = "response.html";

    });


    /*
     * CLEAR FORM
     */

    buildForm.addEventListener("reset", () => {

        setTimeout(() => {

            document
                .querySelectorAll(
                    'input[type="radio"]'
                )
                .forEach((radio) => {

                    radio.checked = false;

                });

        }, 0);

    });

});