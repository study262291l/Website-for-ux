document.addEventListener("DOMContentLoaded", () => {

    const storedData =
        sessionStorage.getItem("typeSoulBuildSubmission");


    if (!storedData) {

        window.location.href = "game-info.html";

        return;

    }


    const submission =
        JSON.parse(storedData);


    document.getElementById(
        "displayPlayerName"
    ).textContent =
        submission.playerName || "Unknown";


    document.getElementById(
        "displayExperience"
    ).textContent =
        submission.experience || "Unknown";


    document.getElementById(
        "displayCombatStyle"
    ).textContent =
        submission.combatStyle || "Unknown";


    document.getElementById(
        "displayInterest"
    ).textContent =
        submission.interest || "Unknown";


    document.getElementById(
        "displayRace"
    ).textContent =
        submission.recommendedRace;


    document.getElementById(
        "displayPlaystyle"
    ).textContent =
        submission.recommendedStyle;


    document.getElementById(
        "displayDifficulty"
    ).textContent =
        submission.difficulty;


    document.getElementById(
        "displayReason"
    ).textContent =
        submission.reason;

});